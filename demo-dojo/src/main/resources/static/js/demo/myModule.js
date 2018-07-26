define([
	// 이 모듈에는 dojo/dom 모듈이 필요합니다.
	// 그래서 다음 dependency를 리스트에 추가합니다.
	'dojo/dom'
], function(dom){
	// dependency 리스트의 모든 모듈이 로드되면,
	// 이 함수는 js/demo/myModule 모듈에 정의되어 호출됩니다.
	//
	// dojo / dom 모듈은 이 함수의 첫 번째 argument로 전달됩니다.
	// dependency 리스트의 추가 모듈은 후속 argument로 전달됩니다.
	
	// private variable
	var oldText = {};
	
	// 이 반환된 Object는 이 모듈의 정의된 값이 됩니다.
	return {
		setText: function(id, text) {
			var node = dom.byId(id);
			oldText.id = node.innerHTML;
			node.innerHTML = text;
		},
		
		restoreText: function(id) {
			var node = dom.byId(id);
			node.innerHTML = oldText.id;
			delete oldText.id;
		}
	};
});