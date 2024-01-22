import { FC, useState } from 'react';
import share from '../../assets/images/share.svg';
import closeFuncIcon from '../../assets/images/closeModal.svg';
import {
    EmailIcon, FacebookIcon, FacebookShareButton, MailruShareButton,
    TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton
} from 'react-share';
import linkIcon from '../../assets/images/link.svg';

interface ShareButtonProps {
    productId: number
};

const ShareButton: FC<ShareButtonProps> = ({ productId }) => {
    const [openModal, setOpenModal] = useState(false);
    const currentProductUrl = window.location.origin;

    const copyToClipboard = (text: string) => {
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };

    return (
        <>
            <div className='flex items-center font-semibold leading-6 text-white' onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpenModal(!openModal);
            }}>
                <img src={share} alt="share-icon" /> <span>Share</span>
            </div>
            <div className={`bg-white w-[90%] h-auto rounded-md z-10 p-5 ${openModal ? 'absolute' : 'hidden'}`}>
                <span className='font-medium'>Share</span>
                <button className='border p-1 mr-0 float-right' onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenModal(false);
                }}>
                    <img src={closeFuncIcon} alt="" />
                </button>
                <hr className='mt-4' />
                <div className='mt-5 grid grid-cols-3 justify-between items-center flex-wrap gap-4'>
                    <WhatsappShareButton onClick={() => setOpenModal(false)} url={`${currentProductUrl}/productDetail/${productId}`} className='w-full flex flex-col'>
                        <WhatsappIcon onClick={() => setOpenModal(false)} className='w-10 rounded-full' /> <span className='text-sm from-neutral-500'>WhatsApp</span>
                    </WhatsappShareButton>
                    <FacebookShareButton url={`${currentProductUrl}/productDetail/${productId}`} className='w-full flex flex-col'>
                        <FacebookIcon onClick={() => setOpenModal(false)} className='w-10 rounded-full' /><span className='text-sm from-neutral-500'>Facebook</span>
                    </FacebookShareButton>
                    <TelegramShareButton url={`${currentProductUrl}/productDetail/${productId}`} className='w-full flex flex-col'>
                        <TelegramIcon onClick={() => setOpenModal(false)} className='w-10 rounded-full' /><span className='text-sm from-neutral-500'>Telegram</span>
                    </TelegramShareButton>
                    <MailruShareButton url={`${currentProductUrl}/productDetail/${productId}`} className='w-full flex flex-col'>
                        <EmailIcon onClick={() => setOpenModal(false)} className='w-10 rounded-full' /><span className='text-sm from-neutral-500'>Email</span>
                    </MailruShareButton>
                    <div className='rounded-sm cursor-pointer mt-3 flex flex-col w-full' onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (productId) {
                            setOpenModal(false);
                        }
                        copyToClipboard(`${currentProductUrl}/productDetail/${productId}`);
                    }}>
                        <img src={linkIcon} className='w-10 h-10 p-1 bg-gray-300 mb-2' alt="" /> <span className='text-sm from-neutral-500 truncate'>Copy Link</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareButton;