Blockly.Blocks['cout'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("cout");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("''"), "input");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['cout'] = function(block) {
	  var text_input = block.getFieldValue('input');
	  // TODO: Assemble JavaScript into code variable.
	  var code='print('+ text_input +')';
	  return [code, Blockly.JavaScript.ORDER_NONE];
	};