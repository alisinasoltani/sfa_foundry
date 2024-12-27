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
    color: '#DA0001',
    fontSize: "1.25rem",
}));

const News = ({ title, subtitle, description }: news) => {
  return (
    <div className="news-container cursor-pointer flex flex-col lg:gap-2 justify-center items-start pr-12 w-[58vw] bg-none" style={{ direction: 'rtl' }}>
        <h3 className="news-title sf_bold lg:text-2xl">
            { title }
        </h3>
        <h4 className="news-subtitle sf_semi lg:text-2xl">
            { subtitle }
        </h4>
        <span className="news-description pt-4 sf_light lg:text-2xl">
            { description }
            <CutsomButton className="text-white rounded-2xl lg:text-xl mt-4 text-base sf_medium flex flex-row gap-2" variant="contained" color="secondary" sx={{ fontSize: "1.25rem" }}>
                مطالعه بیشتر
                <Image src={readMoreIcon} width={20} alt="read more about this news" />
            </CutsomButton>
        </span>
    </div>
  );
}

export default News;