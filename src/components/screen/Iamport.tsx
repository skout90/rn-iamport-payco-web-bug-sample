import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

import IMP from 'iamport-react-native'; // 아임포트 결제모듈을 불러옵니다.

interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

class Screen extends Component<any, any> {
  static navigationOptions = {
    title: 'Title',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  callback = (response) => { /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
    const { navigation } = this.props;
    navigation.replace('Home', response);
  };

  public render() {
    /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      name: '아임포트 결제데이터 분석',
      name: '아임포트 결제데이터 분석',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: '100',
      buyer_name: '홍길동',
      buyer_tel: '01012345678',
      buyer_email: 'example@naver.com',
      buyer_addr: '서울시 강남구 신사동 661-16',
      buyer_postcode: '06018',
      app_scheme: 'example',
    };

    return (
        <IMP.Payment
            userCode={'iamport'} // 가맹점 식별코드
            data={data} // 결제 데이터
            callback={this.callback} // 결제 종료 후 콜백
            loading={{
              message: '잠시만 기다려주세요...', // 로딩화면 메시지
            }}
        />
    );
  }
}

export default Screen;
