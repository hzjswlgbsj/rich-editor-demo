/**
 * Created by WebStorm.
 * User: liulin
 * Date: 2019/4/11
 * Time: 10:42
 */
window.onload = function (ev) {
	var changeEditStatus = document.getElementById('changeEditStatus')
	var consoleRange = document.getElementById('consoleRange')
	var consoleSelection = document.getElementById('consoleSelection')
	var consoleText = document.getElementById('consoleText')
	var editor = document.getElementById('editor')
	var formatBold = document.getElementById('formatBold')
	var formatUnderline = document.getElementById('formatUnderline')

	// 改变编辑器可否编辑的状态
	changeEditStatus.addEventListener('click', function (e) {
		var isEdit = editor.getAttribute('contenteditable')
		var contenteditable = isEdit !== 'true'
		editor.setAttribute('contenteditable', contenteditable)
		console.log('编辑器编辑状态', editor.getAttribute('contenteditable'))
	})

	// 打印当前Range对象
	consoleRange.addEventListener('click', function (e) {
		console.log('Range', saveSelection())
	})

	// 打印当前Selection对象
	consoleSelection.addEventListener('click', function (e) {
		console.log('consoleSelection', window.getSelection())
	})

	// 打印当前Selection对象
	consoleText.addEventListener('click', function (e) {
		console.log('consoleText', document.getElementById('text').childNodes)
	})

	// 加粗
	formatBold.addEventListener('click', function (e) {
		doCommand('bold')
	})

	// 下划线
	formatUnderline.addEventListener('click', function (e) {
		doCommand('formatUnderline')
	})
}
