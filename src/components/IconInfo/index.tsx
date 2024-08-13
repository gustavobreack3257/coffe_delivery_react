import * as S from './styles'

interface iconTypeProps {
  iconType?:
    | 'MAPPIN'
    | 'SHOPPING'
    | 'PACKAGE'
    | 'TIMER'
    | 'COFFEE'
    | 'CURRENCYDOLLAR'
  combinedText?: boolean
  text?: string
}
export function IconInfo({
  iconType,
  combinedText = false,
  text,
}: iconTypeProps) {
  return (
    <S.IconInfoContainer>
      <S.IconContainer
        bgIconColor={
          iconType === 'MAPPIN'
            ? 'purple'
            : iconType === 'SHOPPING'
              ? 'yellowDark'
              : iconType === 'TIMER'
                ? 'yellow'
                : iconType === 'PACKAGE'
                  ? 'baseGray'
                  : iconType === 'COFFEE'
                    ? 'purple'
                    : 'yellowDark'
        }
      >
        {iconType === 'MAPPIN' ? (
          <S.MapPinIcon weight="fill" />
        ) : iconType === 'SHOPPING' ? (
          <S.ShoppingCartIcon weight="fill" />
        ) : iconType === 'PACKAGE' ? (
          <S.PackageIcon weight="fill" />
        ) : iconType === 'TIMER' ? (
          <S.TimerIcon weight="fill" />
        ) : iconType === 'COFFEE' ? (
          <S.CoffeeIcon weight="fill" />
        ) : (
          <S.CurrencyDollarIcon weight="fill" />
        )}
      </S.IconContainer>

      <S.TextInfo>
        {combinedText && iconType === 'MAPPIN' ? (
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos
            - Porto Alegre, RS
          </p>
        ) : combinedText && iconType === 'TIMER' ? (
          <p>
            Previsão de entrega <strong>20 min - 30 min</strong>{' '}
          </p>
        ) : combinedText && iconType === 'CURRENCYDOLLAR' ? (
          <p>
            Pagamento na entrega <strong>Cartão de Crédito</strong>
          </p>
        ) : (
          <p>{text}</p>
        )}
      </S.TextInfo>
    </S.IconInfoContainer>
  )
}
