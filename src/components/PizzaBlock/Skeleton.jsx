import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="14" y="392" rx="3" ry="3" width="88" height="43" />
        <rect x="2" y="250" rx="3" ry="3" width="271" height="32" />
        <rect x="120" y="389" rx="26" ry="26" width="149" height="46" />
        <circle cx="128" cy="116" r="120" />
        <rect x="311" y="361" rx="0" ry="0" width="24" height="4" />
        <rect x="191" y="185" rx="0" ry="0" width="6" height="20" />
        <rect x="5" y="298" rx="0" ry="0" width="271" height="74" />
    </ContentLoader>
)

export default Skeleton