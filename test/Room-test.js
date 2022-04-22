import { expect } from 'chai';
import roomData from './Room-data';
import Room from '../src/classes/Room';

describe('Room', () => {

  let room, room2;

  beforeEach(() => {

    room = new Room(roomData[0]);
    room2 = new Room(roomData[3]);

  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', () => {
    expect(room).to.be.an.instanceOf(Room);
  });


});
