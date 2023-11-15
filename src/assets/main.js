const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3SEvBYhullC-aaEmbEQflg&part=snippet%2Cid&order=date&maxResults=12';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e7a50aa36mshbad67204472691cp1baaa0jsn7dbc32d2b24c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = response.json();
  return data;
}

(async () => {
  try {
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
          <div class="group relative">
              <div
                  class="w-full bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                  <a href="https://www.youtube.com/@macmiller/${video.id.videoId}">
                    <h3 class="text-sm text-indigo-50" style="color:black;">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                  </a>
              </div>
          </div>
      `).slice(0, 12).join('')}
      `;
      console.log(view);
      content.innerHTML = view;
  } catch (error){
    console.log(error);
  }
})();
