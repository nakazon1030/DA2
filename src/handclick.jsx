export const handleClick = (navigate, route, id) => {
    // ボタンがクリックされたときに遷移
    switch (route) {
      case "BookDetail":
        const basePath = '/BookDetail';
        const fullPath = basePath + '/'+id;
        console.log(fullPath);
        //console.log(id);
        navigate(fullPath);
        break;
      case "Top":
        navigate('/');
        break;
      case "MyReport":
        navigate('/MyReport');
        break;
      default:
        navigate('/');
    }
  };