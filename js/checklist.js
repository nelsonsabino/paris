// js/checklist.js

/**
 * Renders the checklist items from Firebase and sets up event listeners for each item.
 * @param {object} checklistItemsRef - The Firebase database reference to the checklist.
 * @param {function} requestPassword - The function to call for password-protected actions.
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
            
            // Event listener para marcar/desmarcar o item
            itemDiv.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
                checklistItemsRef.child(key).update({ checked: e.target.checked });
            });
            
            // Event listener para o botão de editar
            itemDiv.querySelector('.edit-btn').addEventListener('click', (e) => {
                const btn = e.currentTarget;
                document.dispatchEvent(new CustomEvent('openItemModal', { detail: { key: btn.dataset.key, text: btn.dataset.text } }));
            });

            // Event listener para o botão de apagar
            itemDiv.querySelector('.delete-btn').addEventListener('click', (e) => {
                const keyToDelete = e.currentTarget.dataset.key;
                if (confirm('Tem a certeza que quer apagar este item?')) {
                    requestPassword(() => checklistItemsRef.child(keyToDelete).remove());
                }
            });
            checklistContainer.appendChild(itemDiv);
        });
    });
}

/**
 * Initializes all the functionality related to the checklist.
 * @param {object} database - The Firebase database instance.
 * @param {function} requestPassword - The function to call for password-protected actions.
 */
export function initializeChecklist(database, requestPassword) {
    const checklistItemsRef = database.ref('checklist');
    const itemModal = document.getElementById('item-modal');
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const addItemBtn = document.getElementById('add-item-btn');
    const cancelItemBtn = document.getElementById('cancel-item-btn');
    let currentItemKey = null;

    // Inicia a renderização da checklist
    renderChecklist(checklistItemsRef, requestPassword);
    
    // Configura o botão para adicionar um novo item
    if (addItemBtn) {
        addItemBtn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('openItemModal', { detail: {} }));
        });
    }

    // Configura o botão de cancelar no modal
    if (cancelItemBtn) {
        cancelItemBtn.addEventListener('click', () => itemModal.classList.add('hidden'));
    }

    // Event listener global para abrir o modal (para adição ou edição)
    document.addEventListener('openItemModal', (e) => {
        if (!itemModal || !itemInput) return;
        currentItemKey = e.detail.key || null;
        itemInput.value = e.detail.text || '';
        itemModal.classList.remove('hidden');
        itemInput.focus();
    });

    // Configura o formulário do modal para guardar as alterações
    if (itemForm) {
        itemForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = itemInput.value.trim();
            if (!text) return;
            
            requestPassword(() => {
                if (currentItemKey) {
                    // Atualiza um item existente
                    checklistItemsRef.child(currentItemKey).update({ text: text });
                } else {
                    // Adiciona um novo item
                    checklistItemsRef.once('value', (snapshot) => {
                        const newOrder = snapshot.numChildren();
                        checklistItemsRef.push({ text: text, checked: false, order: newOrder });
                    });
                }
                itemModal.classList.add('hidden');
            });
        });
    }
}
