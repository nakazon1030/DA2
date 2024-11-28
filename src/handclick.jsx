export const handleClick = (navigate, route, id) => {
    // ボタンがクリックされたときに遷移
    switch (route) {
      case "Top":
        navigate('/');
        break;
      case "MyReport":
        navigate('/MyReport');
        break;
      case "NewBook":
        const bookbasePath = '/NewBook';
        const bookfullPath = bookbasePath + '/'+id;
        // console.log(bookfullPath);
        //console.log(id);
        navigate(bookfullPath);
        break;
      case "Edit":
        const bookbasePathEdit = '/Edit';
        const bookfullPathEdit = bookbasePathEdit + '/'+id;
        // console.log(bookfullPath);
        //console.log(id);
        navigate(bookfullPathEdit);
        break;
      default:
        navigate('/');
    }
  };