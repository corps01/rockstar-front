export const fetchAlbums = async (id) => {
    try {
      const response = await fetch('http://3.218.67.164:9030/music/album' + (id ? `/${id}/`:'/')+ '?format=json');
  
      if (response.status !== 200) return;
  
      const albums = await response.json();
  
      return albums;
    } catch (e) {
      console.error(e);
    }
  };