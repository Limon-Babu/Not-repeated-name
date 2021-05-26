function notrepeated(names){
	var selected=[];
	
	for(var i=0;i<names.length;i++){
		var name=names[i];
		if(names.indexOf(name)==names.lastIndexOf(name)){
			selected.push(name);
		}
	}
	return selected
}