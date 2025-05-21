export default function Card({ item }) {
    //1. item을 받아와서 카드를 렌더링 해야 합니다.
    //2. item의 title, description, category를 각각 h2, p, span태그에 알맞게 넣으세요
    //3. item은 CardList에서 전달됩니다.
    //* 먼저 CardList.jsx를 작업해야 합니다!
    const imgLink = {
        기술: `https://placehold.co/600x400/007BFF/FFFFFF?text=Tech&font=poppins`,
        디자인: `https://placehold.co/600x400/9B59B6/FFFFFF?text=Design&font=poppins`,
        마케팅: `https://placehold.co/600x400/FFA500/FFFFFF?text=Marketing&font=poppins`,
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={imgLink[item.category]} />
            </div>
            <div className="card-content">
                <span className="card-category">{item.category}</span>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
            </div>
        </div>
    );
}
