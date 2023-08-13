export interface IStyles {
    paddingX: string,
    paddingY: string,
    padding: string,
    heroHeadText: string,
    heroSubText: string,
    sectionHeadText: string,
    sectionSubText: string
}

export interface IComputersProps {
    isMobile: boolean
}

export interface IService {
    icon: string,
    title: string
}

export interface ISectionWrapperProps {
    Component: () => JSX.Element,
    idName: string
}

export interface IExperience {
    title: string,
    company_name: string,
    icon: string,
    iconBg: string,
    date: string,
    points: string[]
}



export interface ITag {
    name: string,
    color: string
}

export interface IProject {
    name: string,
    description: string,
    tags: ITag[],
    image: string,
    source_code_link: string,
    public_link?: string
}


export interface ITestimonial {
    testimonial: string,
    name: string,
    designation: string,
    company: string,
    image: string
}

export interface IForm {
    name: string,
    email: string,
    message: string
}

export interface IProps<T> {
    item: T
    index: number,
}

