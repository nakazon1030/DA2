export const handleClick = (navigate, route, index = 1) => {
    // ボタンがクリックされたときに遷移
    if (route === 'BookDetail' && index !== null) {
        navigate(`/BookDetail/${index}`);
      } 
    else {
    switch (route) {
      case "BookDetail":
        navigate('/BookDetail');
        break;
      case "Top":
        navigate('/');
        break;
      case "MyPage":
        navigate('/MyPage');
        break;
      default:
        navigate('/');
    }
    }
  };