import { FC, useState } from 'react';
import share from '../../assets/images/share.svg';
import closeFuncIcon from '../../assets/images/closeModal.svg';
import { EmailIcon, FacebookIcon, FacebookShareButton, MailruShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

interface ShareButtonProps {
    productId: number
};

const ShareButton: FC<ShareButtonProps> = ({ productId }) => {
    const [openModal, setOpenModal] = useState(false);
    const currentProductUrl = window.location.href;

    return (
        <>
            <div className='flex items-center font-semibold leading-6 text-white' onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpenModal(!openModal);
            }}>
                <img src={share} alt="share-icon" /> <span>Share</span>
            </div>
            <div className={`bg-white w-56 h-auto bottom-10 rounded-md z-10 p-2 ${openModal ? 'absolute' : 'hidden'}`}>
                <button className='border p-1 mr-0 float-right' onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenModal(false);
                }}>
                    <img src={closeFuncIcon} alt="" />
                </button>
                <div className='mt-10 flex justify-between'>
                    <WhatsappShareButton url={`${currentProductUrl}productDetail/${productId}`}>
                        <WhatsappIcon className='w-10 rounded-full' />
                    </WhatsappShareButton>
                    <FacebookShareButton url={`${currentProductUrl}productDetail/${productId}`}>
                        <FacebookIcon className='w-10 rounded-full' />
                    </FacebookShareButton>
                    <TelegramShareButton url={`${currentProductUrl}productDetail/${productId}`}>
                        <TelegramIcon className='w-10 rounded-full' />
                    </TelegramShareButton>
                    <MailruShareButton url={`${currentProductUrl}productDetail/${productId}`}>
                        <EmailIcon className='w-10 rounded-full' />
                    </MailruShareButton>
                </div>
            </div>
        </>
    )
}

export default ShareButton;