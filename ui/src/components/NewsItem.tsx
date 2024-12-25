import { Button, ButtonProps } from "@mui/material";
import readMore from "@/public/icons/readMore.svg";
import Image from "next/image";
import { styled } from '@mui/material/styles';

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
    <div className="flex flex-col gap-2 justify-center items-start px-6 w-[60vw] bg-none" style={{ direction: 'rtl' }}>
        <h3 className="sf_bold text-2xl">
            { title }
        </h3>
        <h4 className="sf_semi text-2xl">
            { subtitle }
        </h4>
        <span className="pt-4 sf_light text-2xl">
            { description }
            <CutsomButton className="text-[#DA0001] text-xl sf_bold inline-flex flex-row gap-2" variant="text" sx={{ color: 'DA0001', fontSize: "1.25rem" }}>
                مطالعه بیشتر
                <Image src={readMore} width={25} alt="read more about this news" />
            </CutsomButton>
        </span>
    </div>
  );
}

export default News;