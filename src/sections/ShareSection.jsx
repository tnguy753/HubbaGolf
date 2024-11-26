import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const ShareSectionWrapper = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #f9fafb;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ShareHeader = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 15px;
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const ShareButton = styled.button.attrs((props) => ({
  style: {
    backgroundColor: props.bgcolor || "#4A5568",
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hovercolor || "#2D3748"};
  }

  svg {
    margin-right: 8px;
    font-size: 1.2rem;
  }
`;

const ShareLinkInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #22c55e;
  }
`;
const ShareSection = ({ newsTitle, newsUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(newsUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <ShareSectionWrapper>
      <ShareHeader>Share this news</ShareHeader>
      <ShareButtonsContainer>
        {/* Social Media Buttons */}
        <ShareButton
          bgcolor="#4267B2"
          hovercolor="#365899"
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${newsUrl}`,
              "_blank"
            )
          }
        >
          <FaFacebook />
          Facebook
        </ShareButton>
        <ShareButton
          bgcolor="#1DA1F2"
          hovercolor="#0d95e8"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${newsUrl}&text=${newsTitle}`,
              "_blank"
            )
          }
        >
          <FaTwitter />
          Twitter
        </ShareButton>
        <ShareButton
          bgcolor="#0077b5"
          hovercolor="#005582"
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${newsUrl}`,
              "_blank"
            )
          }
        >
          <FaLinkedin />
          LinkedIn
        </ShareButton>
        <ShareButton
          bgcolor="#ff5a5f"
          hovercolor="#e04848"
          onClick={() =>
            window.open(`mailto:?subject=${newsTitle}&body=${newsUrl}`, "_self")
          }
        >
          <FaEnvelope />
          Email
        </ShareButton>

        {/* Copy Link */}

        <ShareButton
          bgcolor="#22c55e"
          hovercolor="#16a34a"
          onClick={copyToClipboard}
        >
          Copy Link
        </ShareButton>
      </ShareButtonsContainer>
    </ShareSectionWrapper>
  );
};

export default ShareSection;
