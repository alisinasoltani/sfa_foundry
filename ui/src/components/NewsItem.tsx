import { Button, ButtonProps } from "@mui/material";
import readMore from "@/public/icons/readMore.svg";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import readMoreIcon from "@/public/icons/readMoreIcon.svg";

interface news {
    title: string
    subtitle: string | null
    date: string | null
    description: string
};

const CutsomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#ffffff',
    fontSize: "1.25rem",
    borderRadius: '1rem',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem'
}));

const News = ({ title, subtitle, description }: news) => {
  return (
    <div className="news-container cursor-pointer flex flex-col lg:gap-2 justify-center items-start pr-12 w-[58vw] bg-none" style={{ direction: 'rtl' }}>
        <h3 className="news-title sf_bold lg:text-2xl sm:text-[0.8rem]">
            { title }
        </h3>
        <h4 className="news-subtitle sf_semi lg:text-2xl sm:text-[1rem]">
            { subtitle }
        </h4>
        <span className="news-description pt-4 sf_light lg:text-2xl sm:text-[0.8rem]">
            { description }
            <CutsomButton className="lg:text-xl text-base sf_medium" variant="contained" color="secondary" sx={{ fontSize: "1.25rem" }}>
                مطالعه بیشتر
                <Image src={readMoreIcon} width={20} alt="read more about this news" />
            </CutsomButton>
        </span>
    </div>
  );
}

export default News;