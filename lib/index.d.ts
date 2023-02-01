import { BubbleMenuProps, Extensions, Editor } from "@tiptap/react";
import { BoxProps, FlexProps, SelectProps, ButtonProps, ModalProps, UseDisclosureProps } from "@chakra-ui/react";
import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactElement } from "react";
export declare interface ItemProps {
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}
export declare interface GalleryChildProps<T> extends ItemProps {
    src: T;
    index: number;
}
export declare interface AssetGalleryProps<T = any> {
    fallback?: React.ReactNode;
    assetArray?: T[];
    isLoading?: boolean;
    children: (values: GalleryChildProps<T>) => React.ReactNode;
}
export declare interface AssetBoxProps extends ItemProps, Omit<BoxProps, "id"> {
    id: string;
}
export declare interface InsertButtonProps extends ButtonProps, PropsWithChildren {
    text?: string;
    buttonContainerProps?: BoxProps;
}
export declare type RetapBubbleMenuProps<T = {}> = Partial<Record<NodeOrMarkListExtracted, BubbleMenuNodeProps> & {
    defaultToolbar: Omit<BubbleMenuNodeProps, "disableParagraph"> & {
        disableOnNodeOrMark?: NodeOrMarkListExtracted[];
    };
} & {
    tippyOptions?: BubbleMenuProps["tippyOptions"];
    updateDelay?: number;
    visibleIfEmpty?: boolean;
}> & T;
export declare type BubbleMenuNodeProps = {
    buttons?: Buttons;
    toolbarStyles?: FlexProps;
    alwaysVisible?: boolean;
    disableParagraph?: boolean;
    buttonProps?: ButtonNodes;
};
export declare interface ShouldShowHandlerProps extends WithEditor {
    state: Editor["state"];
    setBubbleMenuData: React.Dispatch<React.SetStateAction<BubbleMenuNodeProps | undefined>>;
}
export declare type ShouldShowHandler = (props: ShouldShowHandlerProps & RetapBubbleMenuProps) => boolean;
export declare type NodeOrMarkList = "paragraph" | "heading" | "bold" | "blockquote" | "bulletList" | "orderedList" | "link" | "youtube" | "image" | "italic" | "strike" | "underline" | "codeBlockLowLight" | "code" | "subscript" | "superscript" | "textStyle" | "highlight" | "table" | "video" | "horizontalRule" | "textIndent";
export declare type NodeOrMarkListExtracted<U = "textStyle"> = Exclude<NodeOrMarkList, U>;
export declare type ButtonList = keyof ButtonNodes;
export declare type Buttons<MergeUnion = {}> = Array<Array<ButtonList | ReactElement | FlexProps> | ButtonList | ReactElement | MergeUnion>;
export declare type ButtonNodes = Partial<{
    bold: WithElement<ButtonProps & ButtonIconProps>;
    horizontalline: WithElement<ButtonProps & ButtonIconProps>;
    codeBlock: WithElement<ButtonProps & ButtonIconProps>;
    hardbreak: WithElement<ButtonProps & ButtonIconProps>;
    blockquote: WithElement<ButtonProps & ButtonIconProps>;
    italic: WithElement<ButtonProps & ButtonIconProps>;
    underline: WithElement<ButtonProps & ButtonIconProps>;
    strike: WithElement<ButtonProps & ButtonIconProps>;
    linkInline: WithElement<ButtonProps & ButtonIconProps>;
    link: WithElement<ButtonProps & ButtonIconProps>;
    video: WithElement<ButtonProps & ButtonIconProps>;
    clearLink: WithElement<ButtonProps & ButtonIconProps>;
    heading: WithElement<SelectProps & ButtonIconProps>;
    image: WithElement<ButtonProps & ButtonIconProps>;
    youtube: WithElement<ButtonProps & ButtonIconProps>;
    subscript: WithElement<ButtonProps & ButtonIconProps>;
    superscript: WithElement<ButtonProps & ButtonIconProps>;
    clearformats: WithElement<ButtonProps & ButtonIconProps>;
    clearcontents: WithElement<ButtonProps & ButtonIconProps>;
    undo: WithElement<ButtonProps & ButtonIconProps>;
    redo: WithElement<ButtonProps & ButtonIconProps>;
    increaseIndent: WithElement<ButtonProps & ButtonIconProps>;
    decreaseIndent: WithElement<ButtonProps & ButtonIconProps>;
    bulletList?: WithElement<ButtonProps & ButtonIconProps>;
    orderedList?: WithElement<ButtonProps & ButtonIconProps>;
    sinkList?: WithElement<ButtonProps & ButtonIconProps>;
    liftList?: WithElement<ButtonProps & ButtonIconProps>;
    leftAlign?: WithElement<ButtonProps & ButtonIconProps>;
    rightAlign?: WithElement<ButtonProps & ButtonIconProps>;
    centerAlign?: WithElement<ButtonProps & ButtonIconProps>;
    justifyText?: WithElement<ButtonProps & ButtonIconProps>;
    table: WithElement<ButtonProps & ButtonIconProps & {
        colsamount?: number;
        rowsamount?: number;
    }>;
    deleteTable: WithElement<ButtonProps & ButtonIconProps>;
    insertRowBelow: WithElement<ButtonProps & ButtonIconProps>;
    insertRowAbove: WithElement<ButtonProps & ButtonIconProps>;
    insertColumnRight: WithElement<ButtonProps & ButtonIconProps>;
    insertColumnLeft: WithElement<ButtonProps & ButtonIconProps>;
    deleteColumn: WithElement<ButtonProps & ButtonIconProps>;
    deleteRow: WithElement<ButtonProps & ButtonIconProps>;
    mergeCells: WithElement<ButtonProps & ButtonIconProps>;
    splitCell: WithElement<ButtonProps & ButtonIconProps>;
    globalButtonProps: ButtonProps & ButtonIconProps;
    globalGroupProps: FlexProps;
    textalign: WithElement<{
        leftAlign?: WithElement<ButtonProps & ButtonIconProps>;
        rightAlign?: WithElement<ButtonProps & ButtonIconProps>;
        centerAlign?: WithElement<ButtonProps & ButtonIconProps>;
        justifyText?: WithElement<ButtonProps & ButtonIconProps>;
    } & ButtonProps & ButtonIconProps>;
    list: WithElement<{
        bulletList?: WithElement<ButtonProps & ButtonIconProps>;
        orderedList?: WithElement<ButtonProps & ButtonIconProps>;
        sinkList?: WithElement<ButtonProps & ButtonIconProps>;
        liftList?: WithElement<ButtonProps & ButtonIconProps>;
    } & ButtonProps & ButtonIconProps>;
    fontcolor: WithElement<ButtonProps & ButtonIconProps & {
        colorList?: Array<Array<string>>;
    }>;
    highlightcolor: WithElement<ButtonProps & ButtonIconProps & {
        colorList?: Array<Array<string>>;
    }>;
    fontfamily: WithElement<SelectProps & ButtonIconProps & {
        fonts?: Array<string>;
    }>;
    fontsize: WithElement<SelectProps & ButtonIconProps & {
        fontSizes?: Array<string>;
    }>;
}>;
export declare type WithElement<T = {}> = {
    replace?: ReactElement;
} & T;
export declare type RenderElementFC<DefaultProps = ButtonHTMLAttributes<HTMLButtonElement> & Required<WithElement>> = <MergeProps = {}>(props: PropsWithChildren<DefaultProps & MergeProps>) => JSX.Element;
export declare type ButtonIconProps<T = {}> = {
    iconstyles?: IconBaseProps;
} & T;
export declare type ButtonFunction<P = {}, ReturnType = boolean> = (props: P) => ReturnType;
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export declare type RetapDisclosureProps = PropsWithChildren & Omit<ModalProps, "isOpen" | "onClose" | "children" | "id"> & {
    id: string;
};
export declare type UseDisclosePropsExtended = Required<Omit<UseDisclosureProps, "onOpen" | "id"> & {
    onOpen: (id: string) => void;
    id: string;
}>;
export declare type RetapDisclosureMeta = {
    disclosureProps?: UseDisclosePropsExtended;
};
export declare type UseRetapDisClosure = () => RetapDisclosureMeta;
export declare type WithEditor<isNull = false> = isNull extends true ? {
    editor: Editor | null;
} : {
    editor: Editor;
};
export declare type RetapEditorProps<T = {}> = {
    toolbarProps?: FlexProps;
    editorProps?: BoxProps;
    fallback?: ReactElement;
    buttons?: Buttons;
    buttonProps?: ButtonNodes;
    bubbleMenuProps?: RetapBubbleMenuProps;
} & WithEditor<true> & T;
export declare interface ImageMeta extends BaseMeta<ImageNodeAttibutes> {
}
export declare type UseImage = () => ImageMeta;
export declare type ImageNodeAttributeKeys = "sources" | "height" | "margin" | "title" | "width" | "alt" | "src";
export declare type ImageNodeAttibutes = {
    [property in keyof Record<ImageNodeAttributeKeys, string>]: property extends "height" | "width" ? number | undefined : property extends "sources" ? Record<string, string> : string | undefined;
};
export declare type ImageModalInputs<T = {}> = {
    src: string;
    title: string;
    alt: string;
} & T;
export declare type LinkInputs<T = {}> = {
    url: string;
} & T;
type ReactState<T> = React.Dispatch<React.SetStateAction<T>>;
export declare interface BaseMeta<NodeAttributes> {
    alignment: "left" | "center" | "right";
    setAlignment: ReactState<"left" | "center" | "right">;
    width: string | number;
    setWidth: ReactState<string | number>;
    height: string | number;
    setHeight: ReactState<string | number>;
    modalProps: UseDisclosureProps;
    attributes: Record<string, any> | undefined;
    setNodeAttributes: ReactState<Record<string, any> | undefined>;
    getNodeAttributes: NodeAttributes | undefined;
    swallowNodeAttributes: ReactState<NodeAttributes | undefined>;
    menuProps: (Omit<RetapToolbarProps, "editor"> & {
        styles?: FlexProps;
    }) | undefined;
    setMenuProps: ReactState<(Omit<RetapToolbarProps, "editor"> & {
        styles?: FlexProps;
    }) | undefined>;
}
export declare type InitialStateMeta = {
    youtube?: Partial<Pick<YoutubeMeta, "alignment" | "width" | "height" | "menuProps">>;
    image?: Partial<Pick<ImageMeta, "alignment" | "width" | "height" | "menuProps">>;
    video?: Partial<Pick<VideoMeta, "alignment" | "width" | "height" | "menuProps">>;
};
export declare type InitialState = React.Dispatch<React.SetStateAction<InitialStateMeta>>;
export declare interface RetapContextType {
    retapDrawer: RetapDisclosureMeta;
    retapModal: RetapDisclosureMeta;
    setInitialProps: InitialState;
    youtube: YoutubeMeta;
    image: ImageMeta;
    video: VideoMeta;
}
export declare type StorageKeys = "paragraph" | "link" | "clipboardTextSerializer" | "commands" | "editable" | "focusEvents" | "keymap" | "tabindex" | "starterKit" | "blockquote" | "bold" | "bulletList" | "code" | "codeBlock" | "doc" | "dropCursor" | "gapCursor" | "hardBreak" | "heading" | "history" | "horizontalRule" | "italic" | "listItem" | "orderedList" | "strike" | "text" | "tableRow" | "tableHeader" | "tableCell" | "color" | "fontFamily" | "underline" | "subscript" | "superscript" | "textStyle" | "image" | "textAlign" | "table" | "youtube" | "characterCount" | "codeBlock" | "highlight";
export declare type StorageMeta = Record<StorageKeys, any>;
export declare type UseStorage = (editor: WithEditor<true>["editor"]) => StorageMeta | undefined;
export declare interface BaseProps extends WithEditor {
    withHeader: boolean;
    rowIndex: number;
    matrix: Matrix;
}
export declare interface RenderRowProps extends BoxProps, BaseProps {
    columns: CellData[];
    updateTable: React.Dispatch<Actions>;
}
export declare interface RenderCellProps extends BoxProps, BaseProps {
    attributes: CellData;
    cellIndex: number;
    updateTable: React.Dispatch<Actions>;
}
export declare type TableData = Pick<TableReducerPayload, "columns" | "rows">;
export declare type CellData = {
    isActive: boolean;
};
export declare type ReducerData = CellData[][];
export declare type Matrix = [
    TableData,
    React.Dispatch<React.SetStateAction<TableData>>
];
export declare type TableReducerPayload = Required<NonNullable<Actions["payload"]>>;
export declare interface Payload {
    cellIndex?: number;
    rowIndex?: number;
    columns?: number;
    rows?: number;
}
export declare interface Actions {
    type: "generateColumns" | "generateRows" | "deactivate" | "activate" | "clear";
    payload?: Payload;
}
export declare type TableReducer = (prev: ReducerData, { type, payload }: Actions) => ReducerData;
export declare type UseTable = (props: TableData) => {
    setWithHeader: React.Dispatch<React.SetStateAction<boolean>>;
    updateMatrix: React.Dispatch<React.SetStateAction<TableData>>;
    updateTable: React.Dispatch<Actions>;
    withHeader: boolean;
    table: ReducerData;
    matrix: TableData;
};
export declare type TableComponentProps = FC<WithEditor & ReturnType<UseTable> & BoxProps>;
export declare type RetapToolbarProps<T = {}> = {
    buttons?: Buttons;
    buttonProps?: ButtonNodes;
    fallback?: ReactElement;
} & WithEditor & T;
export declare type RetapToolbarButtonProps<T = {}> = ButtonNodes & WithEditor & T;
export declare interface VideoMeta extends BaseMeta<VideoNodeAttibutes> {
}
export declare interface VideoOptions {
    HTMLAttributes: {
        className?: string;
        loop?: boolean;
        controls?: boolean;
        muted?: boolean;
        autoPlay?: boolean;
        poster?: string;
        preload?: "auto" | "metadata" | "none";
    } & Record<string, any>;
}
export declare type UseVideo = () => VideoMeta;
export declare type VideoNodeAttributeKeys = "sources" | "height" | "margin" | "title" | "width" | "src";
export declare type VideoNodeAttibutes = {
    [property in keyof Record<VideoNodeAttributeKeys, string>]: property extends "height" | "width" ? number | undefined : property extends "sources" ? Record<string, string> : string | undefined;
};
export declare type VideoModalInputs<T = {}> = {
    src: string;
    title: string;
} & T;
export declare interface Content {
    [key: string]: any;
    type?: NodeOrMarkList | "doc" | "text" | "codeBlock";
    attrs?: Record<string, any>;
    content?: Content[];
    marks?: {
        [key: string]: any;
        type: string;
        attrs?: Record<string, any>;
    }[];
    text?: string;
}
export declare interface ChildrenProps {
    type: Content["type"];
    attrs: Content["attrs"];
    content: Content;
}
export declare interface WatchProps<T extends ChildrenProps = ChildrenProps> {
    children: (values: T) => React.ReactNode;
    extensions: Extensions;
    delay?: number;
}
export declare interface LookupProps {
    content: Content;
    children: WatchProps["children"];
}
export declare interface YoutubeMeta extends BaseMeta<YoutubeNodeAttibutes> {
}
export declare type UseYoutube = () => YoutubeMeta;
export declare type YoutubeNodeAttributeKeys = "src" | "height" | "width" | "start" | "margin";
export declare type YoutubeNodeAttibutes = {
    [property in keyof Record<YoutubeNodeAttributeKeys, string>]: property extends "src" ? string : number | undefined;
};
export declare type YoutubeInputs = {
    src: string;
    mins: number;
    secs: number;
};
export {};
