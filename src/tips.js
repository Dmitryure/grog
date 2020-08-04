import {
  ROUTE_BASIC_FETCH, ROUTE_BASIC_STATE, ROUTE_INTER_FETCH, ROUTE_INTER_STATE,
} from './constants';

export default {
  [ROUTE_BASIC_STATE]: [{ id: 1, text: 'Попробуй использовать useState, ни в коем случае не используй document.querySelector и прочие манипуляции с DOM\'ом' }, { id: 2, text: 'В каждый onChange посылается "event"' }],
  [ROUTE_BASIC_FETCH]: [{ id: 1, text: 'Не забывай про dependancy array (он должен хотя бы быть)' }, { id: 2, text: 'Если пишешь fetch с помощью async/await делай через IIFE' }, { id: 3, text: 'Если у тебя "name" of null или undefined - вспомни про &&' }],
  [ROUTE_INTER_FETCH]: [{ id: 1, text: 'Посмотри, точно ли ты отправляешь Васю, Петю и т.д. (панель network)' }, { id: 2, text: 'Не забудь сделать preventDefault - это же форма' }],
  [ROUTE_INTER_STATE]: [{ id: 1, text: 'Map может быть полезен, и кстати у него есть индекс' }, { id: 2, text: 'Если Expected an assignment or function call, то скорее всего ты не делаешь return в map' }],
  '/': [{ id: 1, text: 'тут пока не придумал что написать' }, { id: 2, text: 'и тут' }],
};
