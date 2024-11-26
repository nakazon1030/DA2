export const handleClick = (navigate, route) => {
    // ボタンがクリックされたときに遷移
    switch (route) {
      case "BookDetail":
        navigate('/BookDetail');
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