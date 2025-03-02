import Button from '../../ui/button/Button';
import { AboutContainer, AboutContent, ButtobContent } from './AboutStyles';

const About = () => {
  return (
    <AboutContainer>
      <h2>
        오늘의 기분을 <br />
        Color로 표현해 보세요.
      </h2>
      <AboutContent>
        <img src="/intro.png" alt="intro 이미지" />
        <h1>Pallete</h1>
      </AboutContent>
      <ButtobContent>
        <Button>기록하러 가기</Button>
      </ButtobContent>
      {/* <Button>클릭하세요</Button> */}
    </AboutContainer>
  );
};

export default About;
