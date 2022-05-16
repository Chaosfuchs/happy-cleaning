import create from 'zustand';

const useStore = create((set, get) => {
  return {
    rooms: [
      {
        id: '0',
        name: 'Kitchen',
        isChecked: false,
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
        isChecked: false,
        mate: null,
        details:
          'The bathroom needs to clean: Toilet, Sink, Shower, Bathtub, Flows ',
        frequency: 'monthly',
      },
    ],
    mates: [
      {
        id: '0',
        name: 'Anna',
        image:
          'https://cdn.pixabay.com/photo/2018/03/30/21/39/fractalius-3276624_960_720.jpg',
        todos: [],
        showMe: false,
      },
      {
        id: '1',
        name: 'Marvin',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYjMqmo4bKrjwXWRf-qNwNQSRPvvRj5SwliW2VHM3nhR7DSetHN-GXAGyZWeHJqYlEWo&usqp=CAU',
        todos: [],
        showMe: false,
      },
      {
        id: '2',
        name: 'Kerstin',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DcvZbojgf8dHI4TbVDa4lsyKY_9XbRzv4Q&usqp=CAU',
        todos: [],
        showMe: false,
      },
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
    toggleStatus: id => {
      set(state => {
        const updatedRooms = state.rooms.map(room => {
          if (room.id === id) {
            room.isChecked = !room.isChecked;
            console.log(room.isChecked);
            return room;
          }
          return room;
        });

        return {
          rooms: updatedRooms,
        };
      });
    },
    chooseMate: (roomId, flatmateId) => {
      set(state => {
        const updatedMates = state.rooms.map(room => {
          if (room.id === roomId) {
            room.mate = flatmateId;
            console.log(flatmateId);
            return room;
          }
          return room;
        });

        return {
          rooms: updatedMates,
        };
      });
    },
  };
});

export default useStore;
