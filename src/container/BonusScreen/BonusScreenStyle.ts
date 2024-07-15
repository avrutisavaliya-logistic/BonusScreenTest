import styled from 'styled-components/native';
import {Colors, Fonts, Responsive} from '../../utils/theme';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView``;

export const Header = styled.View`
  margin-top: ${Responsive.heightPercentageToDP('8.5')}px;
  padding: ${Responsive.widthPercentageToDP('2')}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('6')}px;
  height: ${Responsive.widthPercentageToDP('4')}px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('17')}px;
  color: ${Colors.white};
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
`;

export const BonusContainer = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('5')}px;
  margin-top: ${Responsive.heightPercentageToDP('2.5')}px;
`;

export const BonusLabel = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('17')}px;
  line-height: ${Responsive.convertFontScale('25.5')}px;
  color: ${Colors.white};
  margin-bottom: ${Responsive.heightPercentageToDP('0.5')}px;
`;

export const Content = styled.View`
  padding: ${Responsive.widthPercentageToDP('4')}px;
  border-radius: ${Responsive.widthPercentageToDP('4')}px;
  background-color: ${Colors.black1E};
`;

export const DailyCheckIn = styled.View`
  margin-bottom: ${Responsive.heightPercentageToDP('2.5')}px;
`;

export const DailyCheckInTitle = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('17')}px;
  line-height: ${Responsive.convertFontScale('25.5')}px;
  color: ${Colors.white};
`;

export const DailyCheckInSubTitle = styled.Text`
  font-family: ${Fonts.ThemeMedium};
  font-size: ${Responsive.convertFontScale('12')}px;
  line-height: ${Responsive.convertFontScale('18')}px;
  color: ${Colors.gray8D};
  margin-bottom: ${Responsive.heightPercentageToDP('2')}px;
`;

export const CheckInDays = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Day = styled.View`
  margin-bottom: ${Responsive.heightPercentageToDP('2')}px;
  align-items: center;
`;

export const DayText = styled.Text`
  font-family: ${Fonts.ThemeMedium};
  font-size: ${Responsive.convertFontScale('10')}px;
  line-height: ${Responsive.convertFontScale('15')}px;
  color: ${Colors.gray8D};
`;

export const DailyBonusText = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('14')}px;
  line-height: ${Responsive.convertFontScale('21')}px;
  color: ${Colors.white};
`;

export const Tasks = styled.View`
  margin-bottom: ${Responsive.heightPercentageToDP('2')}px;
`;

export const TaskView = styled.View`
  margin-left: ${Responsive.widthPercentageToDP('4')}px;
`;

export const TaskItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Responsive.widthPercentageToDP('4')}px;
  border-radius: ${Responsive.widthPercentageToDP('3')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1.8')}px;
  background-color: ${Colors.black2E};
`;

export const TaskDescription = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('13')}px;
  line-height: ${Responsive.convertFontScale('19.5')}px;
  color: ${Colors.white};
`;

export const TaskReward = styled.Text`
  font-family: ${Fonts.ThemeRegular};
  font-size: ${Responsive.convertFontScale('12')}px;
  line-height: ${Responsive.convertFontScale('18')}px;
  color: ${Colors.pinkFF};
`;

export const AdItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Responsive.widthPercentageToDP('4')}px;
  border-radius: ${Responsive.widthPercentageToDP('3')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1.8')}px;
  background-color: ${Colors.black2E};
`;

export const AdDescription = styled.Text`
  flex: 1;
`;

export const AdReward = styled.Text`
  color: ${Colors.pinkFF};
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('14')}px;
  line-height: ${Responsive.convertFontScale('21')}px;
  margin-left: ${Responsive.widthPercentageToDP('4')}px;
`;

export const ButtonAction = styled.TouchableOpacity``;

export const Footer = styled.View`
  padding: ${Responsive.widthPercentageToDP('4')}px;
`;

export const FooterHeaderText = styled.Text`
  font-family: ${Fonts.ThemeSemiBold};
  font-size: ${Responsive.convertFontScale('13')}px;
  line-height: ${Responsive.convertFontScale('19.5')}px;
  color: ${Colors.white};
  margin-bottom: ${Responsive.heightPercentageToDP('0.5')}px;
`;

export const FooterText = styled.Text`
  font-family: ${Fonts.ThemeRegular};
  font-size: ${Responsive.convertFontScale('10')}px;
  line-height: ${Responsive.convertFontScale('15')}px;
  color: ${Colors.white};
  margin-bottom: ${Responsive.heightPercentageToDP('0.5')}px;
`;

export const DayContainer = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP('10.6')}px;
  height: ${Responsive.heightPercentageToDP('8')}px;
  background-color: ${Colors.black2E};
  border-radius: ${Responsive.widthPercentageToDP('2.5')}px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${Responsive.widthPercentageToDP('1.2')}px;
  padding-top: ${Responsive.heightPercentageToDP('1')}px;
  padding-bottom: ${Responsive.heightPercentageToDP('1.5')}px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const GetItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Points = styled.Text`
  color: ${Colors.white};
  font-family: ${Fonts.ThemeMedium};
  font-size: ${Responsive.convertFontScale('14')}px;
  line-height: ${Responsive.convertFontScale('21')}px;
`;

export const Coin = styled.Image`
  width: ${Responsive.widthPercentageToDP('5')}px;
  height: ${Responsive.widthPercentageToDP('5')}px;
`;

export const CoinReward = styled.Image`
  width: ${Responsive.widthPercentageToDP('8')}px;
  height: ${Responsive.widthPercentageToDP('8')}px;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    height: Responsive.heightPercentageToDP('4.8'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.heightPercentageToDP('4.8'),
  },
  smallButton: {
    width: Responsive.widthPercentageToDP('14'),
    height: Responsive.heightPercentageToDP('3'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.heightPercentageToDP('4.8'),
    marginLeft: Responsive.widthPercentageToDP('4'),
  },
  smallWatchButton: {
    width: Responsive.widthPercentageToDP('18'),
    height: Responsive.heightPercentageToDP('3'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.heightPercentageToDP('4.8'),
    marginLeft: Responsive.widthPercentageToDP('4'),
  },
  container: {
    margin: Responsive.widthPercentageToDP('4'),
    marginTop: Responsive.widthPercentageToDP('8'),
  },
});
