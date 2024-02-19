import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './Component/Account';
import AddCart from './Component/AddCart';
import ChangePassword from './Component/ChangePassword';
import AddFriends from './Component/AddFriends';
import AddFundsSuccessfull from './Component/AddFunsSuccessfull';
import ForgotPassword2 from './Component/ForgotPassword2';
import BuyOrderSuccessfull from './Component/BuyOrderSuccessfull';
import AddFunds from './Component/AddFunds';
import AddPaymentMethod from './Component/AddPaymentMethod';
import AddPaypal from './Component/AddPaypal';
import AddToWatchList from './Component/AddToWatchList';
import BuyOrderPlaced from './Component/BuyOrderPlaced';
import YouWin from './Component/YouWin';
import YouLost from './Component/YouLost';
import Withdrawl from './Component/Withdrawl';
import WithdrawReviewConfirm from './Component/WithdrawReviewConfirm';
import WithdrawInsufficientFunds from './Component/WithdrawInsufficientFunds';
import WithdrawComplete from './Component/WithdrawComplete';
import Watchlist from './Component/Watchlist';
import WatchlistStockDetail from './Component/WatchlistStockDetail';
import WatchlistBuyStock from './Component/WatchlistBuyStock';
import WatchListBuyOrderSuccessfull from './Component/WatchListBuyOrderSuccessfull';
import Wallet from './Component/Wallet';
import ViewReferrals from './Component/ViewReferrals';
import VarificationEmail from './Component/VarificationEmail';
import StrangerProfile from './Component/StrangerProfile';
import StockDetail from './Component/StockDetail';
import Splash from './Component/Splash';
import SignUp from './Component/SignUp';
import Setting from './Component/Setting';
import SendInvite from './Component/SendInvite';
import SellShares from './Component/SellShares';
import SellSharesSucessfull from './Component/SellSharesSucessfull';
import SellOrderPlaced from './Component/SellOrderPlaced';
import ReviewConfirm from './Component/ReviewConfirm';
import Referrals from './Component/Referrals';
import Profile from './Component/Profile';
import PersonalInfo from './Component/PersonalInfo';
import PaymentMethod from './Component/PaymentMethod';
import PasswordUpdated from './Component/PasswordUpdated';
import PasswordSucessfull from './Component/PasswordSucessfull';
import PasswordEmailSent from './Component/PasswordEmailSent';
import OpenGames from './Component/OpenGames';
import OpenGamesDetail from './Component/OpenGamesDetail';
import OnboardingStep3 from './Component/OnboardingStep3';
import OnboardingStep2 from './Component/OnboardingStep2';
import OnboardingStep1 from './Component/OnboardingStep1';
import Onboarding16 from './Component/Onboarding16';
import Onboarding15 from './Component/Onboarding15';
import Onboarding14 from './Component/Onboarding14';
import Onboarding13 from './Component/Onboarding13';
import Onboarding12 from './Component/Onboarding12';
import Onboarding11 from './Component/Onboarding11';
import Onboarding10 from './Component/Onboarding10';
import Onboarding9 from './Component/Onboarding9';
import Onboarding8 from './Component/Onboarding8';
import Onboarding7 from './Component/Onboarding7';
import Onboarding6 from './Component/Onboarding6';
import OnboardWizard4 from './Component/OnboardWizard4';
import OnboardWizard3 from './Component/OnboardWizard3';
import OnboardWizard2 from './Component/OnboardWizard2';
import OnboardWizard1 from './Component/OnboardWizard1';
import NotificationsMain from './Component/NotificationsMain';
import Notification from './Component/Notification';
import NewPassword from './Component/SetNewPassword';
import SetNewPassword from './Component/SetNewPassword';
import PasswordReset from './Component/PasswordReset';
import NewLevel50 from './Component/NewLevel50';
import NewLevel40to49 from './Component/NewLevel40to49';
import NewLevel30to39 from './Component/NewLevel30to39';
import NewLevel20to29 from './Component/NewLevel20to29';
import NewLevel10to19 from './Component/NewLevel10to19';
import NewLevel1to9 from './Component/NewLevel1to9';
import NavigationMore from './Component/NavigationMore';
import MyProfile from './Component/MyProfile';
import MyGames from './Component/MyGames';
import MyGamesDetail from './Component/MyGamesDetail';
import Level50 from './Component/Level50';
import Login from './Component/Login';
import Level30_39 from './Component/Level30_39';
import Level40_49 from './Component/Level40_49';
import Level20_29 from './Component/Level20_29';
import Level10_19 from './Component/Level10_19';
import Level1_9 from './Component/Level1_9';
import InvitedFriends from './Component/InvitedFriends';
import InviteToGame from './Component/InviteToGame';
import InviteGameDetail from './Component/InviteGameDetail';
import InviteFriends from './Component/InviteFriends';
import InvitationSent from './Component/InvitationSent';
import InsufficientFunds from './Component/InsufficientFunds';
import HowWorks from './Component/HowWorks';
import FriendsProfile from './Component/FriendsProfile';
import ForgotPassword from './Component/ForgotPassword';
import EmailInvite from './Component/EmailInvite';
import EmailSent from './Component/EmailSent';
import EditSellLimitOrder from './Component/EditSellLimitOrder';
import EditPaypal from './Component/EditPaypal';
import EditCard from './Component/EditCard';
import EditBuyLimitOrder from './Component/EditBuyLimitOrder';
import CreateGame from './Component/CreateGame';
import CreateGameReview from './Component/CreateGameReview';
import CheckYourMail from './Component/CheckYourMail';
import BuyShares from './Component/BuyShares';
import Friends from './Component/Friends';
import NewPage from './Component/newPage';
import Carousal from './Component/Carousal';
import SendFeedback from './Component/SendFeedback';


function App() {

  
  return (
    <div className="App">
      <Router
        basename='/mobile'
      >
        <Routes>
          <Route path='/account' element={<Account />}></Route> {/*path="/account"*/}
          <Route path="/add/cart" element={<AddCart />}></Route>
          <Route path="/add/friends" element={<AddFriends />}></Route>
          <Route path="/add/funds" element={<AddFunds />}></Route>
          <Route path="/add/funds/sucessfull" element={<AddFundsSuccessfull />}></Route>
          <Route path="/add/payment/method" element={<AddPaymentMethod />}></Route>
          <Route path="/change/password" element={<ChangePassword />}></Route>
          <Route path="/forgot/password2" element={<ForgotPassword2 />}></Route>
          <Route path="/buy/order/successfull" element={<BuyOrderSuccessfull />}></Route>
          <Route path="/add/paypal" element={<AddPaypal />}></Route>

          <Route path="/addto/watchlist" element={<AddToWatchList />}></Route>
          <Route path="/buy/order/placed" element={<BuyOrderPlaced />}></Route>
          <Route path="/youwin" element={<YouWin />}></Route>
          <Route path="/youlost" element={<YouLost />}></Route>
          <Route path="/withdrawl" element={<Withdrawl />}></Route>
          <Route path="/withdrawl/review/confirm" element={<WithdrawReviewConfirm />}></Route>
          <Route path="/withdrawl/insufficient/funds" element={<WithdrawInsufficientFunds />}></Route>
          <Route path="/withdrawl/complete" element={<WithdrawComplete />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/watchlist/stock/detail" element={<WatchlistStockDetail />}></Route>

          <Route path="/watchlist/buy/stock" element={<WatchlistBuyStock />}></Route>
          <Route path="/watchlist/buy/order/successfull" element={<WatchListBuyOrderSuccessfull />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/view/referrals" element={<ViewReferrals />}></Route>
          <Route path="/varification/email" element={<VarificationEmail />}></Route>
          <Route path="/stranger/profile" element={<StrangerProfile />}></Route>
          <Route path="/stock/detail" element={<StockDetail />}></Route>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/setting" element={<Setting />}></Route>

          <Route path="/send/invite" element={<SendInvite />}></Route>
          <Route path="/sell/shares" element={<SellShares />}></Route>
          <Route path="/sell/shares/sucessfull" element={<SellSharesSucessfull />}></Route>
          <Route path="/sell/order/placed" element={<SellOrderPlaced />}></Route>
          <Route path="/review/confirme" element={<ReviewConfirm />}></Route>
          <Route path="/referrals" element={<Referrals />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/personal/info" element={<PersonalInfo />}></Route>
          <Route path="/payment/method" element={<PaymentMethod />}></Route>
          <Route path="/password/updated" element={<PasswordUpdated />}></Route>

          <Route path="/password/sucessfull" element={<PasswordSucessfull />}></Route>
          <Route path="/password/email/sent" element={<PasswordEmailSent />}></Route>
          <Route path="/open/games" element={<OpenGames />}></Route>
          <Route path="/open/games/detail" element={<OpenGamesDetail />}></Route>
          <Route path="/onboarding/step3" element={<OnboardingStep3 />}></Route>
          <Route path="/onboarding/step2" element={<OnboardingStep2 />}></Route>
          <Route path="/onboarding/step1" element={<OnboardingStep1 />}></Route>
          <Route path="/onboarding16" element={<Onboarding16 />}></Route>
          <Route path="/onboarding15" element={<Onboarding15 />}></Route>
          <Route path="/onboarding14" element={<Onboarding14 />}></Route>

          <Route path="/onboarding13" element={<Onboarding13 />}></Route>
          <Route path="/onboarding12" element={<Onboarding12 />}></Route>
          <Route path="/onboarding11" element={<Onboarding11 />}></Route>
          <Route path="/onboarding10" element={<Onboarding10 />}></Route>
          <Route path="/onboarding9" element={<Onboarding9 />}></Route>
          <Route path="/onboarding8" element={<Onboarding8 />}></Route>
          <Route path="/onboarding7" element={<Onboarding7 />}></Route>
          <Route path="/onboarding6" element={<Onboarding6 />}></Route>
          <Route path="/onboard/wizard4" element={<OnboardWizard4 />}></Route>
          <Route path="/onboard/wizard3" element={<OnboardWizard3 />}></Route>

          <Route path="/onboard/wizard2" element={<OnboardWizard2 />}></Route>
          <Route path="/onboard/wizard1" element={<OnboardWizard1 />}></Route>
          <Route path="/notification/main" element={<NotificationsMain />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          
          {/* where is used? */}
          <Route path="/set/new/password" element={<SetNewPassword />}></Route> 

          <Route path="/password/reset" element={<PasswordReset />}></Route>
          <Route path="/new/level50" element={<NewLevel50 />}></Route>
          <Route path="/new/level/40to49" element={<NewLevel40to49 />}></Route>
          <Route path="/new/level/30to39" element={<NewLevel30to39 />}></Route>
          <Route path="/new/level/20to29" element={<NewLevel20to29 />}></Route>

          <Route path="/new/level/10to19" element={<NewLevel10to19 />}></Route>
          <Route path="/new/level/1to9" element={<NewLevel1to9 />}></Route>
          <Route path="/navigation/more" element={<NavigationMore />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/mygames" element={<MyGames />}></Route>
          <Route path="/mygames/detail" element={<MyGamesDetail />}></Route>
          <Route path="/level50" element={<Level50 />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/level/40_49" element={<Level40_49 />}></Route>
          <Route path="/level/30_39" element={<Level30_39 />}></Route>

          <Route path="/level/20_29" element={<Level20_29 />}></Route>
          <Route path="/level/10_19" element={<Level10_19 />}></Route>
          <Route path="/level/1_9" element={<Level1_9 />}></Route>
          <Route path="/invited/friends" element={<InvitedFriends />}></Route>
          <Route path="/invite/togame" element={<InviteToGame />}></Route>
          <Route path="/invite/game/detail" element={<InviteGameDetail />}></Route>
          <Route path="/invite/friends" element={<InviteFriends />}></Route>
          <Route path="/invitation/sent" element={<InvitationSent />}></Route>
          <Route path="/insufficient/fund" element={<InsufficientFunds />}></Route>
          <Route path="/how/works" element={<HowWorks />}></Route>

          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/friends/profile" element={<FriendsProfile />}></Route>
          <Route path="/forgot/password" element={<ForgotPassword />}></Route>
          <Route path="/email/invite" element={<EmailInvite />}></Route>
          <Route path="/email/sent" element={<EmailSent />}></Route>
          <Route path="/edit/sell/lemit/order" element={<EditSellLimitOrder />}></Route>
          <Route path="/edit/paypal" element={<EditPaypal />}></Route>
          <Route path="/edit/card" element={<EditCard />}></Route>
          <Route path="/edit/buy/limit/order" element={<EditBuyLimitOrder />}></Route>
          <Route path="/create/game" element={<CreateGame />}></Route>

          <Route path="/create/game/review" element={<CreateGameReview />}></Route>
          <Route path="/check/your/mail" element={<CheckYourMail />}></Route>
          <Route path="/buy/shares" element={<BuyShares />}></Route>
          <Route path="/new/page" element={<NewPage />}></Route>
          <Route path="/carousal" element={<Carousal />}></Route>
          <Route path="/send-feedback" element={<SendFeedback />}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
