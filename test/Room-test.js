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

  it('should have a room number', () => {
  	expect(room.number).to.equal(1);
    expect(room2.number).to.equal(4);
  });

  it('should have a room type', () => {
  	expect(room.roomType).to.equal('residential suite');
    expect(room2.roomType).to.equal('single room');
  });

  it('should have a biget', () => {
  	expect(room.bidet).to.equal(true);
    expect(room2.bidet).to.equal(false);
  });

  it('should have a bed size', () => {
  	expect(room.bedSize).to.equal('queen');
    expect(room2.bedSize).to.equal('queen');
  });

  it('should have a number of beds', () => {
  	expect(room.numBeds).to.equal(1);
    expect(room2.numBeds).to.equal(1);
  });

});
