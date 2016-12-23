function InsertSort(array, desc) {
	if(!desc || (desc!="up" && desc!="down")){
		return "must have sort direction in (up, down)"
	}
	var length = array.length;
	if(length == 0) {
		return "array can't be empty";
	}
	if (length == 1) {
		return array;
	}
	array.map(function(o, i){
		if(desc == 'up' ? array[i]<array[i-1] : array[i]>array[i-1]){
			var j = i-1;
			var sorting = array[i];
			array[i] = array[j];
			while(desc == 'up' ? sorting < array[j] : sorting > array[j]){
				array[j+1] = array[j];
				j--;
			}
			array[j+1] = sorting;
		}
	})
	return array;
}

var a = [3,7,4,34,1,2,34,5,6];
console.log(InsertSort(a,"up"));