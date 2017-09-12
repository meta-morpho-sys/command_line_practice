'use strict';

describe('Hinter', function(){

  // beforeEach(function(){
  //   var hinter = new Hinter();
  // });
  it('equals with command_string', function(){
    expect('string').toEqual('string');
  });

  it('equals with command_string', function(){
    expect('string' == 'string').toBe(true);
  })

  it('looks up for a command', function(){
    var hinter = new Hinter();
    expect(hinter.lookup('ls')).toEqual('ls');
  });

});
