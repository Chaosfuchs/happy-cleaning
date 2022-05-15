import create from 'zustand';

const useStore = create((set, get) => {
  return {
    rooms: [
      {
        id: '0',
        name: 'Kitchen',
        isChecked: true,
        mate: null,
        details: 'The kitchen needs to clean...',
        frequency: 'weekly',
      },
      {
        id: '1',
        name: 'Floor',
        isChecked: false,
        mate: null,
        details: 'The floor needs to...',
        frequency: 'daily',
      },
      {
        id: '2',
        name: 'Bathroom',
        isChecked: true,
        mate: null,
        details: 'The bathroom needs to clean...',
        frequency: 'monthly',
      },
    ],
    mates: [
      { id: '0', name: 'Anna', image: null, todos: [], showMe: false },
      { id: '1', name: 'Marvin', image: null, todos: [], showMe: false },
      { id: '2', name: 'Kerstin', image: null, todos: [], showMe: false },
    ],
    toggle: id => {
      set(state => {
        return {
          mates: state.mates.map(mate => {
            return {
              ...mate,
              showMe: mate.id === id ? !mate.showMe : mate.showMe,
            };
          }),
        };
      });
    },
    findRoom: id => {
      return get().rooms.find(room => room.id === id);
    },
  };
});

export default useStore;
