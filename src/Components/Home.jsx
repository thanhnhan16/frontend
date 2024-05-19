import React, { useState } from 'react';

const HomePage = () => {
    const [gia, setGia] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [thoigianSD, setThoiGianSD] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const [mangHinhChecked, setMangHinhChecked] = useState(false);
    const [pinChecked, setPinChecked] = useState(false);
    const [rungChecked, setRungChecked] = useState(false);
    const [camTruocChecked, setCamTruocChecked] = useState(false);
    const [camSauChecked, setCamSauChecked] = useState(false);
    const [chanSacChecked, setChanSacChecked] = useState(false);
    const [loaChecked, setLoaChecked] = useState(false);
    const [voChecked, setVoChecked] = useState(false);
    const [lungChecked, setLungChecked] = useState(false);
    const [kinhChecked, setKinhChecked] = useState(false);
    const [nutHomeChecked, setNutHomeChecked] = useState(false);
    const [khaySimChecked, setKhaySimChecked] = useState(false);

    const [chatLuong, setChatLuong] = useState('');
    const [tienTra, setTienTra] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleMoney = () => {
        let chatLuong = 100;
        if (mangHinhChecked && pinChecked) {
            chatLuong = 0;
        } else {
            if (mangHinhChecked || pinChecked) {
                chatLuong = 50;
            }
            if (rungChecked) {
                chatLuong -= 10;
            }
            if (camTruocChecked) {
                chatLuong -= 10;
            }
            if (camSauChecked) {
                chatLuong -= 10;
            }
            if (chanSacChecked) {
                chatLuong -= 10;
            }
            if (loaChecked) {
                chatLuong -= 10;
            }
            if (voChecked) {
                chatLuong -= 10;
            }
            if (lungChecked) {
                chatLuong -= 10;
            }
            if (kinhChecked) {
                chatLuong -= 10;
            }
            if (nutHomeChecked) {
                chatLuong -= 10;
            }
            if (khaySimChecked) {
                chatLuong -= 10;
            }
        }

        let giaTrenChatLuong = 0;
        if (chatLuong >= 90) {
            giaTrenChatLuong = 85;
        } else if (chatLuong == 70 || chatLuong == 80) {
            giaTrenChatLuong = 70;
        } else if (chatLuong == 50 || chatLuong == 60) {
            giaTrenChatLuong = 55;
        } else if (chatLuong == 30 || chatLuong == 40) {
            giaTrenChatLuong = 40;
        } else {
            giaTrenChatLuong = 10;
        }
        setChatLuong(chatLuong);

        let giaTrenThoiGian = 0;
        if (selectedTime === "Thang") {
            if (thoigianSD <= 12) {
                giaTrenThoiGian = 85;
            } else if (thoigianSD > 12 && thoigianSD <= 24) {
                giaTrenThoiGian = 75;
            } else {
                giaTrenThoiGian = 65;
            }
        } else if (selectedTime === "Nam") {
            if (thoigianSD === 1) {
                giaTrenThoiGian = 85;
            } else if (thoigianSD === 2) {
                giaTrenThoiGian = 75;
            } else {
                giaTrenThoiGian = 65;
            }
        }

        let money = gia * (giaTrenChatLuong / 100) * (giaTrenThoiGian / 100);
        setTienTra(money);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const info = {
            tienTra,
            phoneNumber,
            thoigianSD,
            donViThoiGian: selectedTime,
            chatLuong,
            tenSP: selectedOption,
            mangHinh: mangHinhChecked,
            pin: pinChecked,
            rung: rungChecked,
            camTruoc: camTruocChecked,
            camSau: camSauChecked,
            chanSac: chanSacChecked,
            loa: loaChecked,
            vo: voChecked,
            lung: lungChecked,
            kinh: kinhChecked,
            nutHome: nutHomeChecked,
            khaySim: khaySimChecked,
        };

        try {
            const response = await fetch('http://localhost:8001/api/sendInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error('Failed to send data to server');
            }

            const data = await response.json();
            console.log('Data from server:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <div>
                        <label htmlFor="">Số điện thoại: </label>
                        <input
                            type="text"
                            placeholder='Số điện thoại'
                            id='phoneNumber'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Loại sản phẩm: </label>
                        <select style={{ width: 150 }} value={selectedOption} onChange={handleSelectChange}>
                            <option value="">Chọn sản phẩm</option>
                            <option value="iPhone 5">iPhone 5</option>
                            <option value="iPhone 5S">iPhone 5S</option>
                            <option value="iPhone 6">iPhone 6</option>
                            <option value="iPhone 6 Plus">iPhone 6 Plus</option>
                            <option value="iPhone 6S">iPhone 6S</option>
                            <option value="iPhone 6S Plus">iPhone 6S Plus</option>
                            <option value="iPhone 7">iPhone 7</option>
                            <option value="iPhone 7 Plus">iPhone 7 Plus</option>
                            <option value="iPhone 8">iPhone 8</option>
                            <option value="iPhone 8 Plus">iPhone 8 Plus</option>
                            <option value="iPhone X">iPhone X</option>
                            <option value="iPhone XR">iPhone XR</option>
                            <option value="iPhone XS">iPhone XS</option>
                            <option value="iPhone XS Max">iPhone XS Max</option>
                            <option value="iPhone 11">iPhone 11</option>
                            <option value="iPhone 11 Pro">iPhone 11 Pro</option>
                            <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
                            <option value="iPhone 12">iPhone 12</option>
                            <option value="iPhone 12 Mini">iPhone 12 Mini</option>
                            <option value="iPhone 12 Pro">iPhone 12 Pro</option>
                            <option value="iPhone 12 Max">iPhone 12 Max</option>
                            <option value="iPhone 13">iPhone 13</option>
                            <option value="iPhone 13 Mini">iPhone 13 Mini</option>
                            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                            <option value="iPhone 13 Max">iPhone 13 Max</option>
                            <option value="iPhone 14">iPhone 14</option>
                            <option value="iPhone 14 Plus">iPhone 14 Plus</option>
                            <option value="iPhone 15">iPhone 15</option>
                            <option value="iPhone 15 Plus">iPhone 15 Plus</option>
                            <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                            <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Giá sản phẩm: </label>
                        <input
                            type="number"
                            placeholder="Giá tiền"
                            id="gia"
                            value={gia}
                            onChange={(e) => setGia(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Thời gian sử dụng: </label>
                        <input
                            type="number"
                            placeholder="Thời gian"
                            id="year"
                            value={thoigianSD}
                            onChange={(e) => setThoiGianSD(e.target.value)}
                        />
                        <select style={{ width: 70 }} value={selectedTime} onChange={handleSelectTimeChange}>
                            <option value="">Đơn vị</option>
                            <option value="Thang">Tháng</option>
                            <option value="Nam">Năm</option>
                        </select>
                    </div>
                </div>

                <div style={{justifyContent:'center', display: 'flex' ,marginTop:30}}>
                    <div id='check1' style={{ width: 200}}>
                        <div>
                            <label htmlFor="mangHinh">Màng hình</label>
                            <input
                                type="checkbox"
                                name="mangHinh"
                                id="mangHinh"
                                checked={mangHinhChecked}
                                onChange={(e) => setMangHinhChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="pin">Pin</label>
                            <input
                                type="checkbox"
                                name="pin"
                                id="pin"
                                checked={pinChecked}
                                onChange={(e) => setPinChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="rung">Rung</label>
                            <input
                                type="checkbox"
                                name="rung"
                                id="rung"
                                checked={rungChecked}
                                onChange={(e) => setRungChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="camTruoc">Cam trước</label>
                            <input
                                type="checkbox"
                                name="camTruoc"
                                id="camTruoc"
                                checked={camTruocChecked}
                                onChange={(e) => setCamTruocChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="camSau">Cam sau</label>
                            <input
                                type="checkbox"
                                name="camSau"
                                id="camSau"
                                checked={camSauChecked}
                                onChange={(e) => setCamSauChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="loa">Loa</label>
                            <input
                                type="checkbox"
                                name="loa"
                                id="loa"
                                checked={loaChecked}
                                onChange={(e) => setLoaChecked(e.target.checked)}
                            />
                        </div>
                    </div>

                    <div id='check2' style={{ width: 200 }}>
                        <div>
                            <label htmlFor="vo">Vỏ</label>
                            <input
                                type="checkbox"
                                name="vo"
                                id="vo"
                                checked={voChecked}
                                onChange={(e) => setVoChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="lung">Lưng</label>
                            <input
                                type="checkbox"
                                name="lung"
                                id="lung"
                                checked={lungChecked}
                                onChange={(e) => setLungChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="kinh">Kính</label>
                            <input
                                type="checkbox"
                                name="kinh"
                                id="kinh"
                                checked={kinhChecked}
                                onChange={(e) => setKinhChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="nutHome">Nút home</label>
                            <input
                                type="checkbox"
                                name="nutHome"
                                id="nutHome"
                                checked={nutHomeChecked}
                                onChange={(e) => setNutHomeChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="khaySim">Khay sim</label>
                            <input
                                type="checkbox"
                                name="khaySim"
                                id="khaySim"
                                checked={khaySimChecked}
                                onChange={(e) => setKhaySimChecked(e.target.checked)}
                            />
                        </div>
                        <div>
                            <label htmlFor="chanSac">Chân sạc</label>
                            <input
                                type="checkbox"
                                name="chanSac"
                                id="chanSac"
                                checked={chanSacChecked}
                                onChange={(e) => setChanSacChecked(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={handleMoney}>Tính tiền</button>               
                <button type="submit">Lưu thông tin</button>
                </div>
                
                <label htmlFor="">{tienTra}</label>
            </form>
        </div>
    );
}

export default HomePage;
