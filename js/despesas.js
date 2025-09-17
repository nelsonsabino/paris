// js/despesas.js

// Importa os dados do orçamento de alimentação
import { orcamentoAlimentacao } from '../data/alimentacao_dados.js';

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
const totalGeral4pEl = document.getElementById('total-geral-4p');
const totalGeral1pEl = document.getElementById('total-geral-1p');
const despesasContainer = document.getElementById('despesas-container');
const deleteModal = document.getElementById('delete-modal');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

let itemParaApagar = null;

// --- FUNÇÕES ---

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(valor);
}

function formatarData(dataString) {
    const [ano, mes, dia] = dataString.split('-');
    const data = new Date(ano, mes - 1, dia);
    return new Intl.DateTimeFormat('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' }).format(data);
}

function getHojeString() {
    return new Date().toISOString().split('T')[0];
}

function renderizarDespesas() {
    despesasRef.orderByChild('data').on('value', (snapshot) => {
        if (!snapshot.exists()) {
            despesasContainer.innerHTML = '<p class="text-gray-500 text-center italic">Ainda não há despesas registadas.</p>';
            totalGeral4pEl.textContent = formatarMoeda(0);
            totalGeral1pEl.textContent = formatarMoeda(0);
            return;
        }

        const despesas = [];
        snapshot.forEach(child => {
            despesas.push({ id: child.key, ...child.val() });
        });
        despesas.reverse();

        const despesasPorDia = despesas.reduce((acc, despesa) => {
            const data = despesa.data;
            if (!acc[data]) acc[data] = [];
            acc[data].push(despesa);
            return acc;
        }, {});

        // Calcular totais gerais
        const totalGeral4p = despesas.reduce((sum, d) => sum + parseFloat(d.valor4p), 0);
        const totalGeral1p = despesas.reduce((sum, d) => sum + parseFloat(d.valor1p), 0);
        totalGeral4pEl.textContent = formatarMoeda(totalGeral4p);
        totalGeral1pEl.textContent = formatarMoeda(totalGeral1p);

        // Renderizar a lista de despesas
        despesasContainer.innerHTML = Object.keys(despesasPorDia).map(data => {
            const diaTotal4p = despesasPorDia[data].reduce((sum, d) => sum + parseFloat(d.valor4p), 0);
            const diaTotal1p = despesasPorDia[data].reduce((sum, d) => sum + parseFloat(d.valor1p), 0);
            const orcamentoDoDia = orcamentoAlimentacao[data] || { total4p: 0, porPessoa: 0 };

            return `
                <div class="bg-white p-4 rounded-2xl shadow-lg">
                    <div class="flex justify-between items-center border-b dark:border-slate-700 pb-3 mb-3">
                        <h3 class="font-bold text-lg text-gray-800">${formatarData(data)}</h3>
                        <div class="text-right">
                            <p class="font-semibold text-sm text-gray-500">Total Dia (4p/1p)</p>
                            <p class="font-semibold text-gray-800">${formatarMoeda(diaTotal4p)} / ${formatarMoeda(diaTotal1p)}</p>
                        </div>
                    </div>
                    <ul class="space-y-3">
                        ${despesasPorDia[data].map(d => `
                            <li class="flex items-center justify-between group">
                                <div>
                                    <p class="font-semibold text-gray-800">${d.descricao}</p>
                                    <p class="text-sm text-gray-500">${d.categoria}</p>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-right mr-4">
                                        <p class="font-mono text-sm text-gray-800" title="Total para 5">${formatarMoeda(d.valorTotal)}</p>
                                        <p class="font-mono text-xs text-blue-600" title="Quota 4 Pessoas">${formatarMoeda(d.valor4p)}</p>
                                        <p class="font-mono text-xs text-green-600" title="Quota 1 Pessoa">${formatarMoeda(d.valor1p)}</p>
                                    </div>
                                    <button data-id="${d.id}" class="delete-btn opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="border-t dark:border-slate-700 mt-3 pt-3 text-center">
                         <p class="text-sm font-semibold text-gray-500">Orçamento do Dia (Alimentação)</p>
                         <p class="text-sm text-gray-700">Grupo 4: ${formatarMoeda(orcamentoDoDia.total4p)} | 1 Pessoa: ${formatarMoeda(orcamentoDoDia.porPessoa)}</p>
                    </div>
                </div>
            `;
        }).join('');
    });
}

// --- EVENT LISTENERS ---

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valorTotal = parseFloat(inputValor.value);
    const novaDespesa = {
        descricao: inputDescricao.value,
        valorTotal: valorTotal,
        valor4p: (valorTotal / 5) * 4,
        valor1p: (valorTotal / 5),
        categoria: inputCategoria.value,
        data: inputData.value
    };
    despesasRef.push(novaDespesa);
    form.reset();
    inputData.value = getHojeString();
});

despesasContainer.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn');
    if (deleteBtn) {
        itemParaApagar = deleteBtn.dataset.id;
        deleteModal.classList.remove('hidden');
    }
});

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
    inputData.value = getHojeString();
    renderizarDespesas();
});
