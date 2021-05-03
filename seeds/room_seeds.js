const { Room } = require('../models');

const roomData = [
  {
    room_id: 1001,
    number: 1,
    type: 'single',
    status: 'ready',
  },
  {
    room_id: '1002',
    number: 2,
    type: 'double',
    status: 'occupied',
  },
  {
    room_id: '1003',
    number: 3,
    type: 'single',
    status: 'awaiting cleaning',
  },
  {
    room_id: '1004',
    number: 4,
    type: 'double',
    status: 'ready',
  },
  {
    room_id: '1005',
    number: 5,
    type: 'single',
    status: 'ready',
  },
  {
    room_id: '1006',
    number: 6,
    type: 'single',
    status: 'awaiting cleaning'
  }
];

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;