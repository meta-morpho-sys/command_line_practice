'use strict';

function Hinter(input_id, output_id){
    this.input_id = input_id;
    this.output_id = output_id;
}

Hinter.prototype.lookup = function(command_string){
    if (command_string.equals('ls')) {
        return 'ls';
    } else {
        return '';
    }
};