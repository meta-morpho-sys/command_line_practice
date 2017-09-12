'use strict';

describe('Hinter', function(){

  // beforeEach(function(){
  //   var hinter = new Hinter();
  // });

  it('Gives a nice hint for the ls command', function(){
    var hinter = new Hinter();
    expect(hinter.lookup('ls')).toEqual('Consider ls -al');
  });

});
