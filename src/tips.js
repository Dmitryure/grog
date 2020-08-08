import {
  ROUTE_BASIC_FETCH, ROUTE_BASIC_STATE, ROUTE_INTER_FETCH,
  ROUTE_INTER_STATE, ROUTE_DELETE_STATE, ROUTE_REDUX1,
} from './constants';

export default {
  [ROUTE_BASIC_STATE]: [{ id: 1, text: 'Попробуй использовать useState, ни в коем случае не используй document.querySelector и прочие манипуляции с DOM\'ом' }, { id: 2, text: 'В каждый onChange посылается "event"' }],
  [ROUTE_BASIC_FETCH]: [{ id: 1, text: 'Не забывай про dependency array (он должен хотя бы быть)' }, { id: 2, text: 'Если у тебя "name" of null или undefined - вспомни про &&' }],
  [ROUTE_INTER_FETCH]: [{ id: 1, text: 'Посмотри, точно ли ты отправляешь Васю, Петю и т.д. (панель network)' }, { id: 2, text: 'Не забудь сделать preventDefault - это же форма' }],
  [ROUTE_INTER_STATE]: [{ id: 1, text: 'Map может быть полезен, и кстати у него есть индекс' }, { id: 2, text: 'Если Expected an assignment or function call, то скорее всего ты не делаешь return в map' }],
  [ROUTE_DELETE_STATE]: [{ id: 1, text: 'Не знаешь с чего начать? Попробуй вдохновиться  <a target="_blank" href="https://habr.com/ru/company/hh/blog/352150/">статьей</a>' }, { id: 2, text: 'Ты можешь изменить значения в state так, чтобы они были объектами с id - так будет проще' }],
  [ROUTE_REDUX1]: [{ id: 1, text: 'Не забудь добавить написанный редьюсер в store' }, { id: 2, text: 'Обязательно пропиши переменные в actionTypes, иначе можешь долго дебажить работающий код, "слушающий" разные action.type' }],
  '/': [{ id: 1, text: 'тут пока не придумал что написать' }, { id: 2, text: 'и тут' }, { id: 3, text: 'test' }],
};
