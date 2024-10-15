import Button from '@/components/Button';
import styles from './AssetButton.module.css';
import { downloadFile } from '@/helpers/downloadFile';
import { openExternalLink } from '@/helpers/openExternalLink';

interface AssetButtonProps {
  isDownload: boolean;
  isGame?: boolean;
  link: string;
}

const AssetButton: React.FC<AssetButtonProps> = ({
  isDownload,
  isGame = false,
  link,
}) => {
  const slashedLink = link.split('/');
  const fileName = isDownload ? slashedLink[slashedLink.length - 1] : '';

  return (
    <div data-testid="asset-button-link" id={styles.link}>
      <Button
        onClick={
          isDownload ? downloadFile(fileName, link) : openExternalLink(link)
        }
        text={isDownload ? 'DOWNLOAD' : isGame ? 'PLAY' : 'VIEW'}
        type="primary"
      />
    </div>
  );
};

export default AssetButton;
