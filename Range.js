/**
 * Created by WebStorm.
 * User: liulin
 * Date: 2019/4/11
 * Time: 11:53
 */

//获取当前选中的range
function saveSelection (){
	if (window.getSelection) {
		/*主流的浏览器，包括chrome、Mozilla、Safari*/
		var sel = window.getSelection()
		if(sel.rangeCount > 0){
			return sel.getRangeAt(0)
		}
	} else if(document.selection){
		/*IE下的处理*/
		return document.selection.createRange()
	}
	return null
}

// 回复光标位置
function restoreSelection () {
	var selection = window.getSelection()
	if (selectedRange) {
		try {
			selection.removeAllRanges()  /*清空所有Range对象*/
		} catch (ex) {
			/*IE*/
			document.body.createTextRange().select()
			document.selection.empty()
		}
		/*恢复保存的范围*/
		selection.addRange(selectedRange)
	}
}

// 将光标移至文本最后
function selectAllText(elem){
	if(window.getSelection){
		elem.focus()
		var range = window.getSelection()
		range.selectAllChildren(elem)
		range.collapseToEnd()
	}else if(document.selection){
		var range = document.selection.createTextRange()
		range.moveToElementText(elem)
		range.collapse(false)
		range.select() /*避免产生空格*/
	}
}

// 将光标置于表单元素的最后
function toTextEnd(elem){
	if(window.getSelection){
		elem.setSelectionRange(elem.value.length,elem.value,length)
		elem.focus()
	}else if(document.selection){
		/*IE下*/
		var range = elem.createTextRange()
		range.moveStart('character',elem.value.length)
		range.collapse(true)
		range.select()
	}
}

// 选中所有文字
function selectAllText(elem){
	if(window.getSelection){
		elem.setSelectionRange(0,elem.value.length)
		elem.focus()
	}else if(document.selection){
		var range = elem.createTextRange()
		range.select()
	}
}

// 获取光标位置
function getCursorPosition(elem){
	if(window.getSelection){
		return elem.selectionStart
	}else if(document.selection){
		elem.focus()
		var range = document.selection.createTextRange()
		range.moveStart('character',-elem.value.length)
		return range.text.length
	}
	return elem.value.length
}

//设置光标位置
function setCursorPosition(elem, position){
	if(window.getSelection){
		elem.focus()
		elem.setSelectionRange(position,position)
	}else if(document.selection){
		var range = elem.createTextRange()
		range.collapse(true)
		range.moveEnd('character',position)
		range.moveStart('character',position)
		range.select()
	}
}
