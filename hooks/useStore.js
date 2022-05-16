import create from 'zustand';

const useStore = create((set, get) => {
  return {
    rooms: [
      {
        id: '0',
        name: 'Kitchen',
        isChecked: true,
        mate: null,
        details:
          'The kitchen needs to clean: Desk, Fridge, Kitchenfloor, Oven, Sideboard ',
        frequency: 'weekly',
      },
      {
        id: '1',
        name: 'Floor',
        isChecked: false,
        mate: null,
        details: 'The floor needs to vaccuuming and mopping',
        frequency: 'weekly',
      },
      {
        id: '2',
        name: 'Bathroom',
        isChecked: true,
        mate: null,
        details:
          'The bathroom needs to clean: Toilet, Sink, Shower, Bathtub, Flows ',
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
    /* toggleButton: id => {
      set(state => {
        return {
          rooms: state.rooms.map(room => {
            return {
              isChecked:
                room.id === id
                  ? (room.isChecked = false)
                  : (room.isChecked = true),
            };
          }),
        }; 
      }); 
    },*/
  };
});

export default useStore;
