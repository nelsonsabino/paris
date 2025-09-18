// data/dados_estaticos.js

export const planningEvents = [
    { title: 'Reserva para entrada sem filas na Notre-Dame', date: '2025-09-17', description: 'Reserva para 20/set. Tem que ser feita ás 23.45h por 2 pessoas. Uma reserva 4 para slot 9-9.15h e a outra reserva +1 para os mesmo slot, ou 15 min.depois', status: 'complete', color: '#0d9c08' }
];

export const tripItinerary = [
    { day: 'Dia 1', date: '19/09', theme: 'Chegada e Torre Eiffel', ticketedVenues: [ { name: 'Torre Eiffel', icon: 'fa-tower-observation', status: 'complete', openingHours: '09:00 - 23:45', openDays: 'Todos os dias' }] },
    { day: 'Dia 2', date: '20/09', theme: 'Coração Histórico', ticketedVenues: [ { name: 'Musée dOrsay', icon: 'fa-gem', status: 'complete', openingHours: '09:00 - 17:00', openDays: 'Todos os dias (verificar feriados)' }] },
    { day: 'Dia 3', date: '21/09', theme: 'Realeza e Arte Boémia', ticketedVenues: [ { name: 'Palácio de Versalhes', icon: 'fa-crown', status: 'complete', openingHours: '09:00 - 18:30 (Palácio)', openDays: 'Fecha às Segundas' }] },
    { day: 'Dia 4', date: '22/09', theme: 'Imersão em Arte', ticketedVenues: [ { name: 'Museu do Louvre', icon: 'fa-landmark-dome', status: 'complete', openingHours: '09:00 - 18:00', openDays: 'Fecha às Terças' }, { name: 'Ópera Garnier', icon: 'fa-masks-theater', status: 'complete', openingHours: '10:00 - 17:00', openDays: 'Todos os dias (pode fechar para eventos)' }] },
    { day: 'Dia 5', date: '23/09', theme: 'Despedida e Regresso', ticketedVenues: [ { name: 'Sainte-Chapelle', icon: 'fa-gem', status: 'complete', openingHours: '09:00 - 17:00', openDays: 'Todos os dias (verificar feriados)' } ] }
];
