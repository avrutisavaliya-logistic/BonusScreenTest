import React, {useState, useEffect} from 'react';
import {
  ButtonAction,
  AdItem,
  AdReward,
  BackButton,
  BackImage,
  BonusContainer,
  BonusLabel,
  CheckInDays,
  Coin,
  CoinReward,
  Container,
  Content,
  DailyBonusText,
  DailyCheckIn,
  DailyCheckInSubTitle,
  DailyCheckInTitle,
  Day,
  DayContainer,
  DayText,
  Footer,
  FooterHeaderText,
  FooterText,
  GetItem,
  Header,
  Points,
  ScrollContainer,
  styles,
  TaskDescription,
  TaskItem,
  TaskReward,
  Tasks,
  TaskView,
} from './BonusScreenStyle';
import {ImageBackground, View} from 'react-native';
import Images from '../../utils/theme/images';
import LinearGradient from 'react-native-linear-gradient';

const BonusScreen = () => {
  const [days, setDays] = useState([
    {title: 'Day 1', reward: '20', disable: true},
    {title: 'Day 2', reward: '20', disable: true},
    {title: 'Day 3', reward: '25', disable: true},
    {title: 'Day 4', reward: '25', disable: true},
    {title: 'Day 5', reward: '30', disable: true},
    {title: 'Day 6', reward: '30', disable: true},
    {title: 'Day 7', reward: '30', disable: true},
  ]);

  const [tasks, setTasks] = useState([
    {action: 'Get reward notifications', bonus: 20, rewarded: false},
    {action: 'Get reward sharing', bonus: 20, rewarded: false},
    {action: 'Get reward review', bonus: 100, rewarded: false},
    {action: 'Complete your profile', bonus: 50, rewarded: false},
    {action: 'Complete Book of Love', bonus: 50, rewarded: false},
    {action: 'Follow us on Instagram', bonus: 50, rewarded: false},
    {action: 'Follow us on Tik Tok', bonus: 50, rewarded: false},
    {action: 'Confirm email', bonus: 5, rewarded: false},
  ]);

  const [ads, setAds] = useState([
    {description: 'Watch Ad 1', reward: '+ 5 Bonus', rewarded: false},
    {description: 'Watch Ad 2', reward: '+ 5 Bonus', rewarded: false},
    {description: 'Watch Ad 3', reward: '+ 10 Bonus', rewarded: false},
    {description: 'Watch Ad 4', reward: '+ 10 Bonus', rewarded: false},
    {description: 'Watch Ad 5', reward: '+ 15 Bonus', rewarded: false},
    {description: 'Watch Ad 6', reward: '+ 15 Bonus', rewarded: false},
  ]);

  const [dailyBonusActive, setDailyBonusActive] = useState(true); // Track if daily bonus is active
  const [countdown, setCountdown] = useState(0); // Countdown timer in seconds
  const [nextDayEnabled, setNextDayEnabled] = useState(false); // Track if next day's check-in is enabled

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setDailyBonusActive(false);
      setNextDayEnabled(true);
    }
  }, [countdown]);

  const handleGetDailyBonus = () => {
    if (!dailyBonusActive) {
      setCountdown(86400); // 24 hours in seconds
      handleDayCheckIn(0);
      setDailyBonusActive(true);
    } else {
      //   Alert.alert(
      //     'Daily Bonus Already Claimed',
      //     'Come back tomorrow for more rewards!',
      //   );
    }
  };

  const handleAdClick = (index: number) => {
    if (!ads[index].rewarded) {
      // Simulate claiming reward after watching
      let updatedAds = [...ads];
      updatedAds[index].rewarded = true;
      setAds(updatedAds);
      // Perform additional actions like showing a modal or giving the reward
      console.log(`Ad ${index + 1} watched! Reward claimed.`);
    } else {
      // Handle what happens when the ad is already rewarded
      console.log(`Ad ${index + 1} already claimed.`);
    }
  };

  const handleGetClick = (index: number) => {
    if (!tasks[index].rewarded) {
      // Simulate claiming reward after watching
      let updatedTasks = [...tasks];
      updatedTasks[index].rewarded = true;
      setTasks(updatedTasks);
      // Perform additional actions like showing a modal or giving the reward
      console.log(`get ${index + 1} watched! Reward claimed.`);
    } else {
      // Handle what happens when the ad is already rewarded
      console.log(`get ${index + 1} already claimed.`);
    }
  };

  const handleDayCheckIn = (index: number) => {
    if (days[index].disable && nextDayEnabled) {
      const updatedDays = [...days];
      updatedDays[index].disable = false;
      setDays(updatedDays);
      setNextDayEnabled(false);
    }
  };

  const formatSeconds = (seconds: number) => {
    // Calculate hours, minutes, and remaining seconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    // Ensure two-digit formatting with leading zeros if needed
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    // Return the formatted time string
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <Container>
      <ScrollContainer
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <ImageBackground
          source={Images.bgImage}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover">
          <View style={styles.container}>
            <Header>
              <BackButton>
                <BackImage source={Images.backImage} />
              </BackButton>
              <BonusContainer>
                <BonusLabel>Your Bonus:</BonusLabel>
                <BonusLabel>20</BonusLabel>
              </BonusContainer>
            </Header>

            <Content>
              <DailyCheckIn>
                <DailyCheckInTitle>Daily Check-in</DailyCheckInTitle>
                <DailyCheckInSubTitle>
                  Earn rewards for check-in
                </DailyCheckInSubTitle>
                <CheckInDays>
                  {days.map((day, index) => (
                    <Day key={index}>
                      <DayContainer
                        disabled={day.disable}
                        onPress={() => handleDayCheckIn(index)}>
                        <Points>{'+' + day.reward}</Points>
                        <Coin source={Images.coinImage} />
                      </DayContainer>
                      <DayText>{day.title}</DayText>
                    </Day>
                  ))}
                </CheckInDays>
                <ButtonAction
                  disabled={countdown !== 0}
                  onPress={handleGetDailyBonus}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#5470FE', '#FA67C6']}
                    style={styles.linearGradient}>
                    <DailyBonusText>
                      {countdown !== 0
                        ? formatSeconds(countdown)
                        : 'Get Daily Bonus'}
                    </DailyBonusText>
                  </LinearGradient>
                </ButtonAction>
              </DailyCheckIn>
              <Tasks>
                <DailyCheckInTitle>Task for Beginners</DailyCheckInTitle>
                <DailyCheckInSubTitle>Only one chance</DailyCheckInSubTitle>
                {tasks.map((task, index) => (
                  <TaskItem key={index}>
                    <GetItem>
                      <CoinReward source={Images.coinImage} />
                      <TaskView>
                        <TaskDescription>{task.action}</TaskDescription>
                        <TaskReward>+ {task.bonus} Bonus</TaskReward>
                      </TaskView>
                    </GetItem>
                    <ButtonAction onPress={() => handleGetClick(index)}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#5470FE', '#FA67C6']}
                        style={styles.smallButton}>
                        <TaskDescription>
                          {task.rewarded ? 'Claim' : 'Get'}
                        </TaskDescription>
                      </LinearGradient>
                    </ButtonAction>
                  </TaskItem>
                ))}
              </Tasks>
              <Tasks>
                <DailyCheckInTitle>Watch Ads, Earn Bonus</DailyCheckInTitle>
                <DailyCheckInSubTitle>
                  Watch all Ads, get extra rewards
                  <TaskReward> +20 Bonus </TaskReward>
                </DailyCheckInSubTitle>
                {ads.map((ad, index) => (
                  <AdItem key={index}>
                    <GetItem>
                      <CoinReward source={Images.coinImage} />
                      <AdReward>{ad.reward}</AdReward>
                    </GetItem>
                    <ButtonAction onPress={() => handleAdClick(index)}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#5470FE', '#FA67C6']}
                        style={styles.smallWatchButton}>
                        <TaskDescription>
                          {ad.rewarded ? 'Claim' : 'Watch'}
                        </TaskDescription>
                      </LinearGradient>
                    </ButtonAction>
                  </AdItem>
                ))}
              </Tasks>
            </Content>
            <Footer>
              <FooterHeaderText>Description</FooterHeaderText>
              <FooterText>
                1. All interpretation rights of Bonus belong to Pixllove
              </FooterText>
              <FooterText>
                2. Bonus can only be used for depixelation or livechat, valid
                for 10 days and will be automatically expired and liquidated
                after expiration.
              </FooterText>
              <FooterText>
                3. For 100 bonus coins, you get 1 depixelation and 3 live chats
              </FooterText>
              <FooterText>
                4. The daily limit will be used first when going live. After
                that, bonus coins will be used. If there are not enough bonus
                coins, the balance will be used automatically.
              </FooterText>
              <FooterText>
                5. The sign-in refreshes every evening at 0 am (UTC+1)
              </FooterText>
            </Footer>
          </View>
        </ImageBackground>
      </ScrollContainer>
    </Container>
  );
};

export default BonusScreen;
