

var panels = new Array('panel1', 'panel2', 'panel3','panel4','panel5','panel6');
var tabs = new Array('tab1', 'tab2', 'tab3','tab4','tab5','tab6');
function displayPanel(nval){
  for(i = 0; i < panels.length; i++){
      document.getElementById(panels[i]).style.display = (nval-1 == i) ? 'block':'none';
      document.getElementById(tabs[i]).className=(nval-1 == i) ? 'tab_sel':'tab';
  }
}
