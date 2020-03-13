$('.konversi').click(function(){
	data_input = $('.input').val()
	ubah = data_input.replace(/(.+\.(jpg|png|gif|jpeg))/g, '![]($1)\n')
	$('.output').val(ubah)
})