import {
  AircraftBlackIcon,
  Badge,
  BadgeTitle,
  Ball1,
  BoardingInfoContainer,
  ColumnItems,
  Container,
  DashedDivider,
  FinalMessageContainer,
  FinalMessageDescription,
  FinalMessageTitle,
  FlightContainer,
  HeaderTitle,
  IssueText,
  LargeTopicDescription,
  LineItems,
  PassengerInfoContainer,
  QrCode,
  QrCodeDescription,
  TopicContainer,
  TopicDescription,
  TopicRegularDescription,
  TopicsLine,
  TopicTitle,
} from "./styles";

export function BoardingPass() {
  return (
    <Container>
      <HeaderTitle>Cartão de embarque</HeaderTitle>
      <FlightContainer>
        {/* FLIGHT */}
        <TopicsLine style={{ marginBottom: "20px" }}>
          <TopicContainer left>
            <TopicTitle>Voo</TopicTitle>
            <TopicDescription>RS995</TopicDescription>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Data</TopicTitle>
            <TopicDescription>23/05/2023</TopicDescription>
          </TopicContainer>
        </TopicsLine>

        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>Ilhéus, Brasil</TopicTitle>
            <LargeTopicDescription>IOS</LargeTopicDescription>
            <TopicRegularDescription>17:00</TopicRegularDescription>
          </TopicContainer>

          <AircraftBlackIcon />

          <TopicContainer>
            <TopicTitle>São Paulo, Brasil</TopicTitle>
            <LargeTopicDescription>GRU</LargeTopicDescription>
            <TopicRegularDescription>18:30</TopicRegularDescription>
          </TopicContainer>
        </TopicsLine>
      </FlightContainer>

      {/* PASSENGER */}
      <PassengerInfoContainer>
        <DashedDivider style={{ top: "0px" }} />

        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>Passageiro</TopicTitle>
            <TopicDescription>Carlos</TopicDescription>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Assento</TopicTitle>
            <TopicDescription>10A</TopicDescription>
          </TopicContainer>
        </TopicsLine>

        <DashedDivider style={{ bottom: "0px" }} />
      </PassengerInfoContainer>

      {/* BOARDING */}
      <BoardingInfoContainer>
        <LineItems>
          <ColumnItems>
            <TopicContainer left>
              <TopicTitle>Embarque</TopicTitle>
              <Badge>
                <BadgeTitle>16:15</BadgeTitle>
              </Badge>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Terminal</TopicTitle>
              <TopicDescription>2</TopicDescription>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Portão</TopicTitle>
              <TopicDescription>15</TopicDescription>
            </TopicContainer>
          </ColumnItems>

          <ColumnItems>
            <QrCode />
            <QrCodeDescription>Grupo de embarque: 3</QrCodeDescription>
          </ColumnItems>
        </LineItems>

        <FinalMessageContainer>
          <FinalMessageTitle>{`Atenção: `}</FinalMessageTitle>
          <FinalMessageDescription>Portão fecha 16:45</FinalMessageDescription>
        </FinalMessageContainer>
      </BoardingInfoContainer>

      <IssueText>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </IssueText>
    </Container>
  );
}
