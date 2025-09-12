// data/dados_estaticos.js

export const planningEvents = [
    { title: 'Comprar bilhetes para o Museu do Louvre', date: '2025-06-18', description: 'Comprar para o dia 22 de Setembro (Segunda-feira).', status: 'complete', color: '#16a34a' },
    { title: 'Comprar bilhetes para a Museu D Orsay', date: '2025-06-21', description: 'Em principio em julho já é possivel comprar os bilhetes. Verificar disponibilidade.', status: 'complete', color: '#16a34a' },
    { title: 'Comprar bilhetes para Versailles', date: '2025-06-23', description: 'A partir desta data já é possivel comprar para o dia 21 de setembro.', status: 'complete', color: '#16a34a' },
    { title: 'Comprar bilhetes para a Sainte-Chapelle', date: '2025-07-01', description: 'Em principio em julho já é possivel comprar os bilhetes. Verificar disponibilidade.', status: 'complete', color: '#16a34a' },
    { title: 'Comprar bilhetes para a Torre Eiffel', date: '2025-07-20', description: 'Comprar ás 23h!! (0.00h em Paris) Os bilhetes ficam disponíveis 60 dias antes. Comprar para o dia 19 de Setembro (Sexta-feira).', status: 'complete', color: '#16a34a' },
    { title: 'Comprar bilhetes para a Ópera Garnier', date: '2025-07-23', description: 'Fazer a compra ás 23h!! Comprar para o dia 22 de Setembro (Segunda-feira).', status: 'complete', color: '#16a34a' },
    { title: 'Fazer pagamento da casa de Paris', date: '2025-08-25', description: 'Fazer o pagamento final da reserva.', status: 'complete', color: '#16a34a' },
    { title: 'Reserva para entrada sem filas na Notre-Dame', date: '2025-09-17', description: 'Reserva para 20/set. Tem que ser feita ás 23.45h por 2 pessoas. Uma reserva 4 para slot 9-9.15h e a outra reserva +1 para os mesmo slot, ou 15 min.depois', status: 'pending', color: '#ea580c' },
    { title: 'VIAGEM!', date: '2025-09-19', endDate: '2025-09-24', description: 'De 19 a 23 de Setembro.', status: 'complete', color: '#16a34a' }
];

export const tripItinerary = [
    { day: 'Dia 1', date: '19/09', theme: 'Chegada e Torre Eiffel', ticketedVenues: [ { name: 'Torre Eiffel', icon: 'fa-tower-observation', status: 'complete', openingHours: '09:00 - 23:45', openDays: 'Todos os dias' }] },
    { day: 'Dia 2', date: '20/09', theme: 'Coração Histórico', ticketedVenues: [ { name: 'Musée dOrsay', icon: 'fa-gem', status: 'complete', openingHours: '09:00 - 17:00', openDays: 'Todos os dias (verificar feriados)' }] },
    { day: 'Dia 3', date: '21/09', theme: 'Realeza e Arte Boémia', ticketedVenues: [ { name: 'Palácio de Versalhes', icon: 'fa-crown', status: 'complete', openingHours: '09:00 - 18:30 (Palácio)', openDays: 'Fecha às Segundas' }] },
    { day: 'Dia 4', date: '22/09', theme: 'Imersão em Arte', ticketedVenues: [ { name: 'Museu do Louvre', icon: 'fa-landmark-dome', status: 'complete', openingHours: '09:00 - 18:00', openDays: 'Fecha às Terças' }, { name: 'Ópera Garnier', icon: 'fa-masks-theater', status: 'complete', openingHours: '10:00 - 17:00', openDays: 'Todos os dias (pode fechar para eventos)' }] },
    { day: 'Dia 5', date: '23/09', theme: 'Despedida e Regresso', ticketedVenues: [ { name: 'Sainte-Chapelle', icon: 'fa-gem', status: 'complete', openingHours: '09:00 - 17:00', openDays: 'Todos os dias (verificar feriados)' } ] }
];
