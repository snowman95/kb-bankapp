import styled from "@emotion/styled";
import { colors, Icon, IconButton, typography } from "@kb-bankapp/ui";

export const User = () => {
  return (
    <AssetUserContainer>
      <UserNameBox>
        <UserName>홍길동</UserName>
        <UserNameSuffix>님</UserNameSuffix>
        <IconButton
          theme="PAY"
          custom={{
            DIR: "RIGHT",
          }}
          icon={<Icon.Pay.TransferArrow />}
        />
      </UserNameBox>
      <StarClub>KB스타클럽</StarClub>
    </AssetUserContainer>
  );
};

export const AssetUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 17px 24px;
  width: 100%;
`;
export const UserNameBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  font: ${typography.h02};
  color: ${colors.neutral0};
`;
export const UserNameSuffix = styled.span`
  font: ${typography.h02};
  color: ${colors.neutral60};
`;
export const StarClub = styled.span`
  text-decoration-line: underline;
  line-height: 100%;
  font: ${typography.body02r};
  color: ${colors.neutral30};
`;
