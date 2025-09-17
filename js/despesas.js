// js/despesas.js

// --- INICIALIZAÇÃO FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyAt7jAk5r2tqSdyTf2m7MUebd_t7bbDTJk",
    authDomain: "planeamento-viagem-paris.firebaseapp.com",
    databaseURL: "https://planeamento-viagem-paris-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "planeamento-viagem-paris",
    storageBucket: "planeamento-viagem-paris.appspot.com",
    messagingSenderId: "121000897121",
    appId: "1:121000897121:web:75662c01dc56926bf61820"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
const despesasRef = database.ref('despesas');

// --- ELEMENTOS DO DOM ---
const form = document.getElementById('form-despesa');
const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('valor');
const inputCategoria = document.getElementById('categoria');
const inputData = document.getElementById('data');
const totalGeralEl = document.getElementById('total-geral');
const totalHojeEl = document.getElementById('total-hoje');
const despesasContainer = document.getElementById('despesas-container');
const deleteModal = document.getElementById('delete-modal');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

let itemParaApagar = null;

// --- FUNÇÕES ---

// Formata um número para a moeda local (Euro)
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(valor);
}

// Converte a data de YYYY-MM-DD para um formato legível (ex: "Sexta, 19 de Setembro")
function formatarData(dataString) {
    const [ano, mes, dia] = dataString.split('-');
    const data = new Date(ano, mes - 1, dia);
    return new Intl.DateTimeFormat('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' }).format(data);
}

// Obtém a data de hoje no formato YYYY-MM-DD
function getHojeString() {
    return new Date().toISOString().split('T')[0];
}

// Função principal que lê do Firebase e renderiza a página
function renderizarDespesas() {
    despesasRef.orderByChild('data').on('value', (snapshot) => {
        if (!snapshot.exists()) {
            despesasContainer.innerHTML = '<p class="text-gray-500 text-center italic">Ainda não há despesas registadas.</p>';
            totalGeralEl.textContent = formatarMoeda(0);
            totalHojeEl.textContent = formatarMoeda(0);
            return;
        }

        const despesas = [];
        snapshot.forEach(child => {
            despesas.push({ id: child.key, ...child.val() });
        });
        despesas.reverse(); // Mais recentes primeiro

        // Agrupar despesas por dia
        const despesasPorDia = despesas.reduce((acc, despesa) => {
            const data = despesa.data;
            if (!acc[data]) acc[data] = [];
            acc[data].push(despesa);
            return acc;
        }, {});

        // Calcular totais
        const totalGeral = despesas.reduce((sum, d) => sum + parseFloat(d.valor), 0);
        const totalHoje = despesasPorDia[getHojeString()]?.reduce((sum, d) => sum + parseFloat(d.valor), 0) || 0;

        totalGeralEl.textContent = formatarMoeda(totalGeral);
        totalHojeEl.textContent = formatarMoeda(totalHoje);

        // Renderizar a lista
        despesasContainer.innerHTML = Object.keys(despesasPorDia).map(data => {
            const diaTotal = despesasPorDia[data].reduce((sum, d) => sum + parseFloat(d.valor), 0);
            return `
                <div class="bg-white p-4 rounded-2xl shadow-lg">
                    <div class="flex justify-between items-center border-b dark:border-slate-700 pb-3 mb-3">
                        <h3 class="font-bold text-lg text-gray-800">${formatarData(data)}</h3>
                        <p class="font-semibold text-gray-700">${formatarMoeda(diaTotal)}</p>
                    </div>
                    <ul class="space-y-2">
                        ${despesasPorDia[data].map(d => `
                            <li class="flex items-center justify-between group">
                                <div>
                                    <p class="font-semibold text-gray-800">${d.descricao}</p>
                                    <p class="text-sm text-gray-500">${d.categoria}</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="font-mono mr-4 text-gray-800">${formatarMoeda(d.valor)}</p>
                                    <button data-id="${d.id}" class="delete-btn opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }).join('');
    });
}


// --- EVENT LISTENERS ---

// Listener para o formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const novaDespesa = {
        descricao: inputDescricao.value,
        valor: parseFloat(inputValor.value),
        categoria: inputCategoria.value,
        data: inputData.value
    };
    despesasRef.push(novaDespesa);
    form.reset();
    inputData.value = getHojeString(); // Repõe a data para hoje
});

// Listener para os botões de apagar (usando delegação de eventos)
despesasContainer.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn');
    if (deleteBtn) {
        itemParaApagar = deleteBtn.dataset.id;
        deleteModal.classList.remove('hidden');
    }
});

// Listeners do modal de confirmação
confirmDeleteBtn.addEventListener('click', () => {
    if (itemParaApagar) {
        despesasRef.child(itemParaApagar).remove();
        itemParaApagar = null;
        deleteModal.classList.add('hidden');
    }
});
cancelDeleteBtn.addEventListener('click', () => {
    itemParaApagar = null;
    deleteModal.classList.add('hidden');
});

// --- INICIALIZAÇÃO DA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    inputData.value = getHojeString(); // Preenche a data de hoje
    renderizarDespesas(); // Carrega e exibe as despesas existentes
});
