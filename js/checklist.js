// js/checklist.js

/**
 * Renders the checklist items from Firebase and sets up event listeners for each item.
 * @param {object} checklistItemsRef - The Firebase database reference to the checklist.
 * @param {function|null} requestPassword - The function to call for password-protected actions, or null.
 */
function renderChecklist(checklistItemsRef, requestPassword) {
    const checklistContainer = document.getElementById('checklist-container');
    
    checklistItemsRef.orderByChild('order').on('value', (snapshot) => {
        if (!checklistContainer) return;
        checklistContainer.innerHTML = '';
        if (!snapshot.exists()) {
            checklistContainer.innerHTML = '<p class="text-gray-500 italic">Nenhum item na checklist.</p>';
            return;
        }
        snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            const item = childSnapshot.val();
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'checklist-item flex items-center justify-between group';
            itemDiv.innerHTML = `
                <div class="flex-grow flex items-center">
                    <input type="checkbox" id="${key}" class="hidden" ${item.checked ? 'checked' : ''}>
                    <label for="${key}" class="flex items-center cursor-pointer w-full">
                        <span class="icon-box w-8 h-8 mr-4 flex items-center justify-center border-2 border-gray-300 rounded-md transition-colors flex-shrink-0">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <span class="text-lg">${item.text}</span>
                    </label>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="edit-btn p-2 text-gray-500 hover:text-blue-600" data-key="${key}" data-text="${item.text}"><i class="fa-solid fa-pencil"></i></button>
                    <button class="delete-btn p-2 text-gray-500 hover:text-red-600" data-key="${key}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
            
            itemDiv.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
                checklistItemsRef.child(key).update({ checked: e.target.checked });
            });
            
            itemDiv.querySelector('.edit-btn').addEventListener('click', (e) => {
                const btn = e.currentTarget;
                document.dispatchEvent(new CustomEvent('openItemModal', { detail: { key: btn.dataset.key, text: btn.dataset.text } }));
            });

            itemDiv.querySelector('.delete-btn').addEventListener('click', (e) => {
                const keyToDelete = e.currentTarget.dataset.key;
                if (confirm('Tem a certeza que quer apagar este item?')) {
                    const deleteAction = () => checklistItemsRef.child(keyToDelete).remove();
                    // Se a função de password existir, chama-a. Se não, executa a ação diretamente.
                    if (requestPassword) {
                        requestPassword(deleteAction);
                    } else {
                        deleteAction();
                    }
                }
            });
            checklistContainer.appendChild(itemDiv);
        });
    });
}

/**
 * Initializes all the functionality related to the checklist.
 * @param {object} database - The Firebase database instance.
 * @param {function|null} requestPassword - The function to call for password-protected actions, or null.
 */
export function initializeChecklist(database, requestPassword) {
    const checklistItemsRef = database.ref('checklist');
    const itemModal = document.getElementById('item-modal');
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const addItemBtn = document.getElementById('add-item-btn');
    const cancelItemBtn = document.getElementById('cancel-item-btn');
    let currentItemKey = null;

    renderChecklist(checklistItemsRef, requestPassword);
    
    if (addItemBtn) {
        addItemBtn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('openItemModal', { detail: {} }));
        });
    }

    if (cancelItemBtn) {
        cancelItemBtn.addEventListener('click', () => itemModal.classList.add('hidden'));
    }

    document.addEventListener('openItemModal', (e) => {
        if (!itemModal || !itemInput) return;
        currentItemKey = e.detail.key || null;
        itemInput.value = e.detail.text || '';
        itemModal.classList.remove('hidden');
        itemInput.focus();
    });

    if (itemForm) {
        itemForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = itemInput.value.trim();
            if (!text) return;
            
            const saveAction = () => {
                if (currentItemKey) {
                    checklistItemsRef.child(currentItemKey).update({ text: text });
                } else {
                    checklistItemsRef.once('value', (snapshot) => {
                        const newOrder = snapshot.numChildren();
                        checklistItemsRef.push({ text: text, checked: false, order: newOrder });
                    });
                }
                itemModal.classList.add('hidden');
            };

            // Se a função de password existir, chama-a. Se não, executa a ação diretamente.
            if (requestPassword) {
                requestPassword(saveAction);
            } else {
                saveAction();
            }
        });
    }
}
