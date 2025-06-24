// your code here
document.getElementById("myForm").addEventListener('submit',function(event){
	event.preventDefault();
	const name = encodeURIComponent(document.getElementById("name").value);
	const year = encodeURIComponent(document.getElementById("year").value);
	const baseUrl = 'https://localhost:8080/'
	const query = `?name=${name}&year=${year}`;
	document.getElementById('url').textContent = baseUrl+query;
});
}