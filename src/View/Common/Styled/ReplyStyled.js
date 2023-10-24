import Styled from "styled-components";

export const ReplyStyled = Styled.div`
    .reply {
        padding: 10px;
        width: 100%;
        border-bottom: ${(props) =>
          props.border == true ? "" : "1px solid var(--gray-scale-400, #DDD)"};
    }
`;
