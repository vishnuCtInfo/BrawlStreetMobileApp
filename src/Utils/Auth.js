//user authanticated if user login
export function IsAuthnaticated() {
  const activeUserEmail = sessionStorage.getItem("user_mail_id");
  const accessToken = sessionStorage.getItem("access_token");
  const userId = sessionStorage.getItem("user_id");
  const referralCode = sessionStorage.getItem("referral_code");
  const username = sessionStorage.getItem("username");

  if (activeUserEmail && accessToken && userId) {
    return { activeUserEmail, accessToken, userId , referralCode, username};
  } else {
    const activeUserEmail = localStorage.getItem("user_mail_id");
    const accessToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");
    const referralCode = localStorage.getItem("referral_code");
    const username = localStorage.getItem("username");

    if (activeUserEmail && accessToken && userId) {
      sessionStorage.setItem("user_mail_id", activeUserEmail);
      sessionStorage.setItem("access_token", accessToken);
      sessionStorage.setItem("user_id", userId);
      sessionStorage.setItem("referral_code",referralCode);
      sessionStorage.setItem("username",username);

      return { activeUserEmail, accessToken, userId, referralCode, username};
    } else {
      return false;
      
    }
  }
}

export function SetIsAuthnaticated({ data, keepLogin }) {
  try {
    data?.email &&  sessionStorage.setItem("user_mail_id",data?.email);
    data?.access_token && sessionStorage.setItem("access_token",data?.access_token);
    data?.user_id && sessionStorage.setItem("user_id",data?.user_id);
    data?.referral_code && sessionStorage.setItem("referral_code",data?.referral_code);
    data?.username && sessionStorage.setItem("username",data?.username);

    if (keepLogin) {
      data?.email && localStorage.setItem("user_mail_id",data?.email);
      data?.access_token && localStorage.setItem("access_token",data?.access_token);
      data?.user_id && localStorage.setItem("user_id",data?.user_id);
      data?.referral_code && localStorage.setItem("referral_code",data?.referral_code);
      data?.username && localStorage.setItem("username",data?.username);
      return true;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const server_live_url = 'http://138.197.50.31/mobile';
export const server_local_url = 'http://localhost:3000/mobile';

export const forgate_pass_email_set =(email) => sessionStorage.setItem('forgate-password-email',email);
export const forgate_pass_email_get = () => sessionStorage.getItem('forgate-password-email');

// window.location.search.split('code=')[1]